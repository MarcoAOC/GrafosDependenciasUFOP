import { PdfReader } from 'pdfreader';
import { get } from 'https';
import { createWriteStream, writeFileSync } from 'fs';

const baseUrl = 'https://zeppelin10.ufop.br/SistemaAcademico/MatrizCurricular?codCurso='
const basePath = './src/generated'
const cursos = ['CJM', 'EJM', 'PJM', 'SJM']

cursos.map(async curso => {
    await new Promise((resolve, reject) => {
        get(baseUrl + curso, async (res) => {
            const path = `${basePath}/${curso}.pdf`;
            const filePath = createWriteStream(path);
            res.pipe(filePath);
            filePath.on('finish', () => {
                filePath.close();
                resolve()
            })
        })
    });
    const items = await new Promise((resolve, reject) => {
        const items = []
        new PdfReader().parseFileItems(`${basePath}/${curso}.pdf`, (err, item) => {
            if (err) console.error("error:", err);
            else if (!item) resolve(items)
            else if (item.text) {
                items.push(item.text)
            }
        });
    });

    const obrigatoriasIndex = items.findIndex(x => x.search(/obrigatória/i) !== -1)
    const eletivasIndex = items.findIndex(x => x.search(/eletiva/i) !== -1)
    const obrigatorias = items.slice(obrigatoriasIndex, eletivasIndex)
    const disciplinas = []
    for (let i = 0; i < obrigatorias.length; i++) {
        if (obrigatorias[i].search(/[A-Z]{3}[0-9]{3}/) !== -1) {
            const disciplina = {
                code: obrigatorias[i],
                name: obrigatorias[i + 1]
            }
            let lastIndexOfData = i
            while (isNaN(obrigatorias[lastIndexOfData]) || +obrigatorias[lastIndexOfData] < 30) {
                lastIndexOfData++
            }
            i = lastIndexOfData
            lastIndexOfData--
            const preRequisitos = []
            let firstMatchIndex = -1
            while (obrigatorias[lastIndexOfData].search(/[A-Z]{3}[0-9]{3}/) !== -1 || obrigatorias[lastIndexOfData].search(/horas/) !== -1) {
                if (firstMatchIndex == -1) firstMatchIndex = lastIndexOfData
                preRequisitos.push(obrigatorias[lastIndexOfData])
                lastIndexOfData--
            }
            disciplina.periodo = obrigatorias[lastIndexOfData]

            disciplina.preRequisitos = preRequisitos
            disciplinas.push(disciplina)
        }
    }

    const nodesAndEdges = {
        nodes: [],
        edges: [],
    }
    disciplinas.forEach(disciplina => {
        nodesAndEdges.nodes.push({
            level: +disciplina.periodo,
            id: disciplina.code,
            label: `${disciplina.name.substring(0, 25)}...`,
            title: `${disciplina.code} - ${disciplina.name}`,
        })
        disciplina.preRequisitos.forEach(preRequisito => {
            nodesAndEdges.edges.push({
                to: disciplina.code,
                from: preRequisito,
            })
        })
    })
    writeFileSync(`${basePath}/${curso}.json`, JSON.stringify(nodesAndEdges))
})


