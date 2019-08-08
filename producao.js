function changeprod() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

        {level: 1, id: 'CEA001', label: 'GAAL', title: 'CEA001 GEOMETRIA ANALITCA E ALGEBRA LINEAR',y:-1200},
        {level: 1, id: 'CSI030', label: 'Prog I', title: 'CSI030 PROGRAMACAO DE COMPUTADORES I',y:-1100},
        {level: 1, id: 'CEA031', label: 'Química', title: 'CEA031 QUIMICA GERAL',y:-1000},
        {level: 1, id: 'CEA160', label: 'Cálculo I', title: 'CEA160 CALCULO DIFERENCIAL E INTEGRAL I',y:-900},
        {level: 1, id: 'ENP100', label: 'Introdução à EP', title: 'ENP100 INTRODUCAO A ENGENHARIA DE PRODUCAO',y:-800},
        {level: 1, id: 'ENP101', label: 'Metodologia de pesquisa', title: 'ENP101 INTRODUCAO À METODOLOGIA DA PESQUISA',y:-700},
        
        {level: 2, id: 'CEA003', label: 'Fisica I', title: 'CEA003 FISICA I',y:-1200},
        {level: 2, id: 'CEA301', label: 'Cálculo II', title: 'CEA301 CALCULO DIFERENCIAL E INTEGRAL II',y:-1100},
        {level: 2, id: 'CSI428', label: 'AEDS I', title: 'CSI428 ALGORITMOS E ESTRUTURA DE DADOS I',y:-1000},
        {level: 2, id: 'ENP004', label: 'Expressão Gráfica', title: 'ENP004 EXPRESSAO GRAFICA',y:-900},
        {level: 2, id: 'ENP152', label: 'Ética', title: 'ENP152 ETICA E RESPONSABILIDADE SOCIOAMBIENTAL',y:-800},
    
        {level: 3, id: 'CEA006', label: 'Cálculo III', title: 'CEA006 CALCULO DIFERENCIAL E INTEGRAL III',y:-1200},
        {level: 3, id: 'CEA007', label: 'Fisica II', title: 'CEA007 FISICA II',y:-1100},
        {level: 3, id: 'CEA302', label: 'IEDO', title: 'CEA302 INTRODUCAO AS EQUACOES DIFERENCIAIS E ORDINARIAS',y:-1000},
        {level: 3, id: 'CEA012', label: 'Probabilidade', title: 'CEA012 PROBABILIDADE',y:-900},
        {level: 3, id: 'ENP151', label: 'CTS', title: 'ENP151 CIENCIA, TECNOLOGIA E SOCIEDADE',y:-800},
        {level: 3, id: 'HORA1', label: '750 Horas', title: '750 HORAS',y:-700},
    
        {level: 4, id: 'CEA013', label: 'Fisica III', title: 'CEA013 FISICA III',y:-1200},
        {level: 4, id: 'CEA020', label: 'Estatistica I', title: 'CEA020 ESTATISTICA I',y:-1100},
        {level: 4, id: 'CEA404', label: 'Calculo Numérico', title: 'CEA404 CALCULO NUMERICO',y:-1000},
        {level: 4, id: 'ENP005', label: 'Ergonomia', title: 'ENP005 ERGONOMIA',y:-900},
        {level: 4, id: 'ENP153', label: 'Programação Linear', title: 'ENP153 PROGRAMACAO LINEAR',y:-800},
    
        {level: 5, id: 'ENP014', label: 'Organização do Trabalho', title: 'ENP014 ORGANIZACAO DO TRABALHO',y:-1200},
        {level: 5, id: 'ENP015', label: 'Microeconomia', title: 'ENP015 MICROECONOMIA',y:-1100},
        {level: 5, id: 'ENP017', label: 'Teoria das Organizações', title: 'ENP017 TEORIA DAS ORGANIZAÇÕES',y:-1000},
        {level: 5, id: 'ENP157', label: 'Estatistica II', title: 'ENP157 ESTATISTICA II',y:-900},
        {level: 5, id: 'ENP160', label: 'Otimização Combinatória', title: 'ENP160 OTIMIZACAO COMBINATORIA',y:-800},
        {level: 5, id: 'HORA2', label: '1050 Horas', title: '1050 HORAS',y:-700},
        {level: 5, id: 'HORA3', label: '1200 Horas', title: '1200 HORAS',y:-600},
    
        {level: 6, id: 'CEA700', label: 'Ciências dos Materiais', title: 'CEA700 PRINCIPIOS DE CIENCIAS DOS MATERIAIS',y:-1200},
        {level: 6, id: 'ENP019', label: 'Psicologia do Trabalho', title: 'ENP019 PSICOLOGIA DO TRABALHO',y:-1100},
        {level: 6, id: 'ENP022', label: 'Gestão da Qualidade', title: 'ENP022 GESTAO DA QUALIDADE',y:-1000},
        {level: 6, id: 'ENP154', label: 'PEM', title: 'ENP154 PLANEJAMENTO ESTRATEGICO E MERCADOLOGICO',y:-900},
        {level: 6, id: 'ENP155', label: 'Custos Industriais', title: 'ENP155 CUSTOS INDUSTRIAIS',y:-800},
        {level: 6, id: 'HORA4', label: '1800 Horas', title: '1800 HORAS',y:-700},
    
        {level: 7, id: 'ATV025', label: 'Estágio', title: 'ATV025 ESTAGIO SUPERVISIONADO',y:-1200},
        {level: 7, id: 'ENP023', label: 'Engenharia Econômica', title: 'ENP023 ENGENHARIA ECONOMICA',y:-1100},
        {level: 7, id: 'ENP025', label: 'Gestão do Conhecimento', title: 'ENP025 GESTAO DO DONHECIMENTO',y:-1000},
        {level: 7, id: 'ENP122', label: 'PCP I', title: 'ENP122 PLANEJAMENTO E CONTROLE DE PRODUCAO I',y:-900},
        {level: 7, id: 'ENP141', label: 'CEQ', title: 'ENP141 CONTROLE ESTATISTICO DE QUALIDADE',y:-800},
        {level: 7, id: 'ENP701', label: 'Engenharia de Processos Mecânicos', title: 'ENP701 ENGENHARIA DE PROCESSOS MECANICOS',y:-700},
    
        {level: 8, id: 'ENP119', label: 'Logística', title: 'ENP119 LOGISTICA',y:-1200},
        {level: 8, id: 'ENP534', label: 'Sistema de Desenvolvimento de Produto', title: 'ENP534 SISTEMA DE DESENVOLVIMENTO DE PRODUTO',y:-1100},
        {level: 8, id: 'ENP159', label: 'Gestão de Projetos', title: 'ENP159 GESTAO DE PROJETOS',y:-1000},
        {level: 8, id: 'ENP123', label: 'PCP II', title: 'ENP123 PLANEJAMENTO E CONTROLE DE PRODUCAO II',y:-900},
        {level: 8, id: 'HORA5', label: '2100 Horas', title: '2100 HORAS',y:-800},
    
        {level: 9, id: 'ATV100', label: 'AACC', title: 'ATV100 ATIVIDADE ACADEMICO CIENTIFICO-CULTURAL',y:-1200},
        {level: 9, id: 'ATV029', label: 'Elaboração de Projeto de Monografia', title: 'ATV029 ELABORACAO DE PROJETO DE MONOGRAFIA',y:-1100},
        {level: 9, id: 'CSI009', label: 'Fundamentos de Sistemas de Informação', title: 'CEA009 FUNDAMENTOS DE SISTEMAS DE INFORMACAO',y:-1000},
        {level: 9, id: 'ENP028', label: 'Gestão da Cadeia de Suprimentos', title: 'ENP028 GESTAO DA CADEIA DE SUPRIMENTOS',y:-900},
        {level: 9, id: 'ENP158', label: 'Modelagem de Sistemas Produtivos e Logísticos I', title: 'ENP158 MODELAGEM DE SISTEMAS PRODUTIVOS E LOGISTICOS I',y:-800},
    
        {level: 10, id: 'ATV030', label: 'Monografia', title: 'ATV030 MONOGRAFIA',y:-1200},
        {level: 10, id: 'ENP029', label: 'Gestão Ambiental ', title: 'ENP029 GESTAO AMBIENTAL',y:-1100},
        {level: 10, id: 'ENP156', label: 'Gestão de Serviços', title: 'ENP156 GESTAO DE SERVICOS',y:-1000},
        {level: 10, id: 'ENP161', label: 'Simulação a Eventos Discretos', title: 'ENP161 SIMULACAO A EVENTOS DISCRETOS',y:-900},
        ]);
    
    window.edgesSet = new vis.DataSet([
    
        {to: 'CEA003', from:'CEA160'},
    {to: 'CEA301', from:'CEA001'},
    {to: 'CEA301', from:'CEA160'},
    {to: 'CSI428', from:'CSI030'},
    {to: 'CEA006', from:'CEA160'},
    {to: 'CEA006', from:'CEA301'},
    {to: 'CEA007', from:'CEA003'},
    {to: 'CEA007', from:'CEA301'},
    {to: 'CEA012', from:'CEA160'},
    {to: 'CEA012', from:'CEA301'},
    {to: 'CEA302', from:'CEA301'},
    {to: 'CEA013', from:'CEA006'},
    {to: 'CEA013', from:'CEA007'},
    {to: 'CEA020', from:'CEA012'},
    {to: 'CEA404', from:'CEA007'},
    {to: 'CEA404', from:'CEA301'},
    {to: 'CEA404', from:'CEA302'},
    {to: 'CEA404', from:'CSI030'},
    {to: 'ENP005', from:'HORA1'},
    {to: 'ENP153', from:'CEA001'},
    {to: 'ENP153', from:'CSI030'},
    {to: 'ENP153', from:'CSI428'},
    {to: 'ENP014', from:'ENP005'},
    {to: 'ENP015', from:'CEA006'},
    {to: 'ENP015', from:'CEA020'},
    {to: 'ENP017', from:'ENP005'},
    {to: 'ENP157', from:'CEA012'},
    {to: 'ENP157', from:'CEA020'},
    {to: 'ENP160', from:'ENP153'},
    {to: 'CEA700', from:'CEA031'},
    {to: 'ENP019', from:'ENP014'},
    {to: 'ENP022', from:'CEA020'},
    {to: 'ENP154', from:'HORA3'},
    {to: 'ENP154', from:'ENP015'},
    {to: 'ENP155', from:'HORA3'},
    {to: 'ENP023', from:'CEA012'},
    {to: 'ENP023', from:'CEA020'},
    {to: 'ENP023', from:'ENP015'},
    {to: 'ENP023', from:'ENP155'},
    {to: 'ENP025', from:'ENP017'},
    {to: 'ENP025', from:'ENP154'},
    {to: 'ENP122', from:'HORA3'},
    {to: 'ENP141', from:'ENP022'},
    {to: 'ENP701', from:'CEA700'},
    {to: 'ENP119', from:'HORA3'},
    {to: 'ENP123', from:'ENP122'},
    {to: 'ENP159', from:'ENP004'},
    {to: 'ENP159', from:'ENP023'},
    {to: 'ENP159', from:'ENP157'},
    {to: 'ENP534', from:'ENP017'},
    {to: 'ENP534', from:'ENP122'},
    {to: 'ENP534', from:'ENP154'},
    {to: 'ATV029', from:'HORA5'},
    {to: 'CSI009', from:'HORA5'},
    {to: 'ENP028', from:'ENP119'},
    {to: 'ENP158', from:'CEA020'},
    {to: 'ENP158', from:'ENP119'},
    {to: 'ENP158', from:'ENP122'},
    {to: 'ENP158', from:'ENP160'},
    {to: 'ENP029', from:'HORA5'},
    {to: 'ATV025', from:'HORA4'},
    
        
    {to: 'ENP156', from:'ENP014'},
    {to: 'ENP156', from:'ENP017'},
    {to: 'ENP156', from:'ENP154'},
    
    {to: 'ENP161', from:'CEA012'},
    {to: 'ENP161', from:'CSI428'},
    {to: 'ENP161', from:'ENP160'},
    
    
    ]); 
    
    data2 = {
        nodes: nodesSet,
        edges: edgesSet,
    
    }
    network.setData(data2);
    nodesSet.forEach(function (node) {
        var edges = edgesSet.get({returnType: 'Object'});
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
    document.getElementById("curso").innerHTML = "Engenharia De Produção";
    
}
