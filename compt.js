
function changecompt() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

        { level: 1, id: 'CEA001', label: 'GAAL', title: 'CEA001 GEOMETRIA ANALITICA E ALGEBRA LINEAR', y: -1200 },
        { level: 1, id: 'CEA031', label: 'Química', title: 'CEA031 QUIMICA GERAL', y: -1100 },
        { level: 1, id: 'CEA160', label: 'Cálculo I', title: 'CEA160 CALCULO DIFERENCIAL E INTEGRAL I', y: -1000 },
        { level: 1, id: 'CSI030', label: 'Prog I', title: 'CSI030 PROGRAMACAO DE COMPUTADORES I', y: -900 },
        { level: 1, id: 'CSI201', label: 'Introdução à EC', title: 'CSI201 INTRODUCAO A ENGENHARIA DE COMPUTACAO', y: -800 },
        { level: 1, id: 'CSI427', label: 'Metodologia de pesquisa', title: 'CSI427 METODOLOGIA DE PESQUISA APLICADA A COMPUTACAO', y: -700 },
        { level: 1, id: 'EAD707', label: 'Comunicação e expressão', title: 'EAD707 COMUNICACAO E EXPRESSAO', y: -600 },

        { level: 2, id: 'CEA003', label: 'Física I', title: 'CEA003 FISICA I', y: -1200 },
        { level: 2, id: 'CEA301', label: 'Cálculo II', title: 'CEA301 CALCULO DIFERENCIAL E INTEGRAL II', y: -1100 },
        { level: 2, id: 'CEA307', label: 'Estatística', title: 'CEA307 ESTATISTICA E PROBABILIDADE', y: -1000 },
        { level: 2, id: 'CSI032', label: 'Prog II', title: 'CSI032 PROGRAMACAO DE COMPUTADORES II',y:-900},
        { level: 2, id: 'CSI443', label: 'Matemática discreta', title: 'CSI443 MATEMATICA DISCRETA',y:-800},

        { level: 3, id: 'CEA006', label: 'Cálculo III', title: 'CEA006 CALCULO DIFERENCIAL E INTEGRAL III',y:-1200 },
        { level: 3, id: 'CEA007', label: 'Física II', title: 'CEA007 FISICA II',y:-1100},
        { level: 3, id: 'CEA302', label: 'IEDO', title: 'INTRODUCAO AS EQUACOES DIFERENCIAIS ORDINARIAS',y:-1000},
        { level: 3, id: 'CEA341', label: 'Eletrônica digital', title: 'CEA341 PRINCIPIOS DE ELETRONICA DIGITAL',y:-900},
        { level: 3, id: 'CSI488', label: 'AEDS I', title: 'CSI488 ALGORITMOS E ESTRUTURA DE DADOS I',y:-800},

        { level: 4, id: 'CEA013', label: 'Física III', title: 'CEA013 FISICA III',y:-1200},
        { level: 4, id: 'CSI429', label: 'AEDS II', title: 'CSI429 ALGORITMOS E ESTRUTURA DE DADOS II',y:-1100},
        { level: 4, id: 'CSI466', label: 'Grafos', title: 'CSI466 TEORIA DOS GRAFOS',y:-1000},
        { level: 4, id: 'CEA552', label: 'Circuitos I', title: 'CEA552 CIRCUITOS ELETRICOS I',y:-900},
        { level: 4, id: 'CEA562', label: 'Sinais e sistemas', title: 'CEA562 SINAIS E SISTEMAS',y:-800},

        { level: 5, id: 'CEA034', label: 'Física IV', title: 'CEA034 FISICA IV',y:-1200},
        { level: 5, id: 'CSI148', label: 'Análise numérica', title: 'CSI148 ANALISE NUMERICA',y:-1100},
        { level: 5, id: 'CSI203', label: 'OAC', title: 'CSI203 ORGANIZACAO E ARQUITETURA DE COMPUTADORES I',y:-1000},
        { level: 5, id: 'CSI485', label: 'Engenharia de software I', title: 'CSI485 ENGENHARIA DE SOFTWARE I',y:-900},
        { level: 5, id: 'CEA502', label: 'Eletromagnetismo', title: 'CEA502 ELETROMAGNETISMO',y:-800},

        { level: 6, id: 'CSI440', label: 'BD I', title: 'CSI440 BANCO DE DADOS I',y:-1200},
        { level: 6, id: 'CSI509', label: 'OAC II', title: 'CSI509 ORGANIZACAO E ARQUITETURA DE COMPUTADORES II',y:-1100},
        { level: 6, id: 'CSI546', label: 'PAA', title: 'CSI546 PROJETO E ANALISE DE ALGORITMO',y:-1000},
        { level: 6, id: 'CEA561', label: 'Eletrônica', title: 'CEA561 ELETRONICA I',y:-900},
        { level: 6, id: 'CEA582', label: 'Comunicações', title: 'CEA582 FUNDAMENTOS DE COMUNICACOES',y:-800},

        { level: 7, id: 'CSI437', label: 'SO', title: 'CSI437 SISTEMAS OPERACIONAIS',y:-1200},
        { level: 7, id: 'CSI476', label: 'FTC', title: 'CSI476 FUNDAMENTOS TEORICOS DA COMPUTACAO',y:-1100},
        { level: 7, id: 'CSI508', label: 'Computação gráfica', title: 'CSI508 COMPUTACAO GRAFICA',y:-1000},
        { level: 7, id: 'CEA551', label: 'Modelagem', title: 'CEA551 MODELAGEM E ANALISE DE SISTEMAS LINEARES',y:-900},
        { level: 7, id: 'CEA580', label: 'Microprocessadores', title: 'CEA580 MICROPROCESSADORES E MICROCONTROLADORES',y:-800},

        { level: 8, id: 'CSI419', label: 'Linguagens', title: 'CSI419 LINGUAGENS DE PROGRAMACAO',y:-1200},
        { level: 8, id: 'CSI450', label: 'IHC', title: 'CSI450 INTERACAO HUMANO-COMPUTADOR',y:-1100},
        { level: 8, id: 'EAD344', label: 'Administração', title: 'EAD344 TEORIA DA ADMINISTRACAO',y:-1000},
        { level: 8, id: 'CSI457', label: 'IA', title: 'CSI457 INTELIGENCIA ARTIFICIAL',y:-900},
        { level: 8, id: 'CSI548', label: 'Redes I', title: 'CSI548 REDES DE COMPUTADORES I',y:-800},
        { level: 8, id: 'HORAS', label: '2200 horas', title: 'HORAS',y:-700},

        { level: 9, id: 'CSI433', label: 'Sistemas distribuídos', title: 'CSI433 SISTEMAS DISTRIBUIDOS',y:-1200},
        { level: 9, id: 'CSI495', label: 'TCC I', title: 'CSI495 TRABALHO DE CONCLUSAO DE CURSO I',y:-1100},
        { level: 9, id: 'CSI506', label: 'Compiladores I', title: 'CSI506 COMPILADORES I',y:-1000},
        { level: 9, id: 'EAD351', label: 'Filosofia e Ética', title: 'EAD351 FILOSOFIA E ÉTICA',y:-900},
        { level: 9, id: 'CSI510', label: 'Redes II', title: 'CSI510 REDES DE COMPUTADORES II',y:-800},

        { level: 10, id: 'CSI496', label: 'TCC II', title: 'CSI496 TRABALHO DE CONCLUSAO DE CURSO II',y:-1200},
        { level: 10, id: 'CEA592', label: 'Fundamentos de ciência do ambiente', title: 'CEA592 FUNDAMENTOS DE CIENCIA DO AMBIENTE',y:-1100},
        { level: 10, id: 'CSI491', label: 'Informática e sociedade', title: 'CSI491 INFORMATICA E SOCIEDADE',y:-1000},
        { level: 10, id: 'CSI693', label: 'Avaliação de desempenho de sistemas', title: 'CSI693 AVALIACAO DE DESEMPENHO DE SISTEMAS',y:-900},
    ]);

    window.edgesSet = new vis.DataSet([


        { to: 'CEA003', from: 'CEA001' },
        { to: 'CEA003', from: 'CEA160' },
        { to: 'CEA301', from: 'CEA160' },
        { to: 'CEA307', from: 'CEA160' },
        { to: 'CSI032', from: 'CSI030' },

        { to: 'CEA006', from: 'CEA301' },
        { to: 'CEA007', from: 'CEA003' },
        { to: 'CEA302', from: 'CEA301' },
        { to: 'CEA341', from: 'CSI030' },
        { to: 'CSI488', from: 'CSI030' },

        { to: 'CEA013', from: 'CEA001' },
        { to: 'CEA013', from: 'CEA003' },
        { to: 'CEA552', from: 'CEA007' },
        { to: 'CEA552', from: 'CEA302' },
        { to: 'CEA562', from: 'CEA301' },
        { to: 'CEA562', from: 'CEA302' },
        { to: 'CSI429', from: 'CSI032' },
        { to: 'CSI429', from: 'CSI488' },
        { to: 'CSI466', from: 'CSI443' },
        { to: 'CSI466', from: 'CSI488' },

        { to: 'CEA034', from: 'CEA007' },
        { to: 'CEA034', from: 'CEA013' },
        { to: 'CEA502', from: 'CEA006' },
        { to: 'CEA502', from: 'CEA007' },
        { to: 'CSI148', from: 'CEA001' },
        { to: 'CSI148', from: 'CEA302' },
        { to: 'CSI148', from: 'CSI030' },
        { to: 'CSI203', from: 'CEA341' },
        { to: 'CSI203', from: 'CSI030' },
        { to: 'CSI485', from: 'CSI032' },
        { to: 'CSI485', from: 'CSI488' },

        { to: 'CEA561', from: 'CEA034' },
        { to: 'CEA561', from: 'CEA552' },
        { to: 'CEA582', from: 'CEA562' },
        { to: 'CSI440', from: 'CSI488' },
        { to: 'CSI509', from: 'CSI203' },
        { to: 'CSI546', from: 'CSI466' },

        { to: 'CEA551', from: 'CEA013' },
        { to: 'CEA551', from: 'CEA552' },
        { to: 'CEA580', from: 'CSI203' },
        { to: 'CSI437', from: 'CSI203' },
        { to: 'CSI437', from: 'CSI488' },
        { to: 'CSI476', from: 'CSI466' },
        { to: 'CSI508', from: 'CEA001' },
        { to: 'CSI508', from: 'CSI488' },

        { to: 'CSI419', from: 'CSI476' },
        { to: 'CSI450', from: 'CSI485' },
        { to: 'CSI457', from: 'CSI466' },
        { to: 'CSI548', from: 'CSI488' },

        { to: 'CSI433', from: 'CSI548' },
        { to: 'CSI495', from: 'HORAS' },
        { to: 'CSI506', from: 'CSI476' },
        { to: 'CSI510', from: 'CSI548' },

        { to: 'CSI496', from: 'CSI495' },
        { to: 'CSI693', from: 'CSI433' },
    ]);
    data2 = {
        nodes: nodesSet,
        edges: edgesSet,
    }
    network.setData(data2);
    nodesSet.forEach(function (node) {
        var edges = edgesSet.get({ returnType: 'Object' });
        var connEdges = network.getConnectedEdges(node.id);

        for (j = 0; j < connEdges.length; j++) {
            if (edges[connEdges[j]].to == node.id
                && taken[edges[connEdges[j]].from] != true) {
                available[node.id] = false;
                node.color = gray;
                nodesSet.update(node);
                return;
            }
        }

        available[node.id] = true;
        if(taken[node.id]==true)
            node.color = blue;
        else
            node.color = green;

        nodesSet.update(node);
    });
    document.getElementById("curso").innerHTML = "Engenharia de Computação";
}