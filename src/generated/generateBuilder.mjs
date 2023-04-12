import { PdfReader } from 'pdfreader';
import { get } from 'https';
import { createWriteStream, writeFileSync } from 'fs';
import { Builder, Browser, By, Key, until } from 'selenium-webdriver';

const baseUrl = 'https://zeppelin10.ufop.br/SistemaAcademico/MatrizCurricular?codCurso='
const basePath = '.'
const cursos = ['CJM', 'EJM', 'PJM', 'SJM']

function extractDisciplinesFromPdf(pdfTextArray) {
    const disciplinas = []
    for (let i = 0; i < pdfTextArray.length; i++) {
        if (pdfTextArray[i].search(/[A-Z]{3}[0-9]{3}/) !== -1) {
            const disciplina = {
                code: pdfTextArray[i],
                name: pdfTextArray[i + 1]
            }
            let lastIndexOfData = i
            while (isNaN(pdfTextArray[lastIndexOfData]) || +pdfTextArray[lastIndexOfData] < 30) {
                lastIndexOfData++
            }
            i = lastIndexOfData
            lastIndexOfData--
            const preRequisitos = []
            let firstMatchIndex = -1
            while (pdfTextArray[lastIndexOfData].search(/[A-Z]{3}[0-9]{3}/) !== -1 || pdfTextArray[lastIndexOfData].search(/horas/) !== -1) {
                if (firstMatchIndex == -1) firstMatchIndex = lastIndexOfData
                preRequisitos.push(pdfTextArray[lastIndexOfData])
                lastIndexOfData--
            }
            disciplina.periodo = pdfTextArray[lastIndexOfData]

            disciplina.preRequisitos = preRequisitos
            disciplinas.push(disciplina)
        }
    }
    return disciplinas
}

function disciplinesToNodesAndEdges(disciplinas) {
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
            if (!nodesAndEdges.nodes.find(x => x.id == preRequisito)) {
                nodesAndEdges.nodes.push(
                    {
                        level: +disciplina.periodo - 1,
                        id: preRequisito,
                        label: preRequisito,
                        title: preRequisito,
                    }
                )
            }
            nodesAndEdges.edges.push({
                to: disciplina.code,
                from: preRequisito,
            })
        })
    })
    return nodesAndEdges
}

async function downloadPdfFromCurso(curso) {
    return await new Promise((resolve, reject) => {
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
}

async function parsePdfFile(curso) {
    return new Promise((resolve, reject) => {
        const items = []
        new PdfReader().parseFileItems(`${basePath}/${curso}.pdf`, (err, item) => {
            if (err) console.error("error:", err);
            else if (!item) resolve(items)
            else if (item.text) {
                items.push(item.text)
            }
        });
    });
}

const allDepartments = []

for (let curso of cursos) {
    //await downloadPdfFromCurso(curso)
    const items = await parsePdfFile(curso)
    const obrigatoriasIndex = items.findIndex(x => x.search(/obrigatória/i) !== -1)
    const eletivasIndex = items.findIndex(x => x.search(/eletiva/i) !== -1)
    const lastIndex = items.findIndex(x => x.search(/caráter/i) !== -1)
    const obrigatoriasPdfText = items.slice(obrigatoriasIndex, eletivasIndex)
    const eletivasPdfText = items.slice(eletivasIndex, lastIndex)

    const disciplinasObrigatorias = extractDisciplinesFromPdf(obrigatoriasPdfText)
    const disciplinasEletivas = extractDisciplinesFromPdf(eletivasPdfText)

    disciplinasObrigatorias.forEach(disciplina => allDepartments.push(`DE${disciplina.code.slice(0, 3)}`))
    disciplinasEletivas.forEach(disciplina => allDepartments.push(`DE${disciplina.code.slice(0, 3)}`))

    const nodesAndEdgesObrigatorias = disciplinesToNodesAndEdges(disciplinasObrigatorias)
    const nodesAndEdgesEletivas = disciplinesToNodesAndEdges(disciplinasEletivas)

    writeFileSync(`${basePath}/${curso}.json`, JSON.stringify(nodesAndEdgesObrigatorias))
    writeFileSync(`${basePath}/${curso}-eletivas.json`, JSON.stringify(nodesAndEdgesEletivas))
}

//const uniqueDepartments = [...new Set(allDepartments)]
const timeTableUrl = 'https://zeppelin10.ufop.br/HorarioAulas/index.xhtml'

const driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions('headless').build();

const departamentos = ['DECEA', 'DECSI', 'DEELT', 'DEENP']
const timeTableByCode = {}
try {
    for (let departamento of departamentos) {
        console.log(departamento)
        await driver.get(timeTableUrl);
        const table = await driver.wait(until.elementLocated(By.id("formPrincipal:tabela")))
        const depsLink = await table.findElements(By.css('a'))
        for (let depLink of depsLink) {
            let depText = null
            try {
                depText = await depLink.getText()
            }
            catch (e) { 
                break;
             }
            if (departamento === depText) {
                await depLink.click()
                const timeTable = await driver.wait(until.elementLocated(By.id("formPrincipal:tabela")))
                const timeTableRows = await timeTable.findElements(By.css('tr'))
                for (let timeTableRow of timeTableRows) {
                    const textCols = await Promise.all((await timeTableRow.findElements(By.css('td'))).map(x => x.getText()))

                    if (textCols.length > 0) {
                        const [name, code, a, turma, horario, modalidade, b, c, professor, d, e, curso] = textCols
                        if (!timeTableByCode[code]) {
                            timeTableByCode[code] = { name, times: [] }
                        }
                        timeTableByCode[code].times.push({
                            horario, professor, curso
                        })
                    }
                }
            }
        }
    }
} catch (e) {
    console.log(e)
    await driver.quit();
}
writeFileSync(`${basePath}/time-table.json`, JSON.stringify(timeTableByCode))