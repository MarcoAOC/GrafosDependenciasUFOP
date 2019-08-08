function changesis() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

        {level: 1, id: 'CEA036', label: 'GAAL', title: 'CEA036 FUNDAMENTOS DE GEOMETRIA ANALITCA E ALGEBRA LINEAR',y:-1200},
        {level: 1, id: 'CSI030', label: 'Prog I', title: 'CSI030 PROGRAMACAO DE COMPUTADORES I',y:-1100},
        {level: 1, id: 'CSI145', label: 'Fundamentos de SI', title: 'CSI145 TEORIA E FUNDAMENTOS DE SISTEMAS DE INFORMACAO',y:-1000},
        {level: 1, id: 'CEA423', label: 'Cálculo', title: 'CEA423 FUNDAMENTOS DE CALCULO',y:-900},
        {level: 1, id: 'CSI427', label: 'Metodologia', title: 'CSI427 METODOLOGIA DE PESQUISA APLICADA À COMPUTACAO',y:-800},
        {level: 1, id: 'CSI491', label: 'Informática e Sociedade', title: 'CSI491 INFORMATICA E SOCIEDADE',y:-700},
        
        {level: 2, id: 'CSI032', label: 'Prog II', title: 'CSI032 PROGRAMACAO DE COMPUTADORES II',y:-1200},
        {level: 2, id: 'ENP144', label: 'Administração', title: 'ENP144 TEORIA GERAL DA ADMINISTRACAO',y:-1100},
        {level: 2, id: 'CSI488', label: 'Aeds I', title: 'CSI488 ALGORITMOS E ESTRUTURA DE DADOS I',y:-1000},
        {level: 2, id: 'CSI443', label: 'Matematica Discreta', title: 'CSI443 MATEMATICA DISCRETA I',y:-900},
        {level: 2, id: 'CSI460', label: 'Gestao da Informação', title: 'CSI460 GESTAO DA INFORMACAO',y:-800},
        
        {level: 3, id: 'CEA307', label: 'Estatística e Probabilidade', title: 'CEA307 ESTATISTICA E PROBABILIDADE',y:-1200},
        {level: 3, id: 'CSI424', label: 'FAC', title: 'CSI424 FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES',y:-1100},
        {level: 3, id: 'CSI429', label: 'AEDS II', title: 'CSI429 ALGORITMOS E ESTRUTURA DE DADOS II',y:-1000},
        {level: 3, id: 'CSI466', label: 'Grafos', title: 'CSI466 TEORIA DOS GRAFOS',y:-900},
        {level: 3, id: 'ENP473', label: 'Comportamento', title: 'ENP473 COMPORTAMENTO ORGANIZACIONAL',y:-800},
        
        {level: 4, id: 'ENP150', label: 'Economia', title: 'ENP150 ECONOMIA',y:-1200},
        {level: 4, id: 'CSI437', label: 'Sistemas Operacionais', title: 'CSI437 SISTEMAS OPERACIONAIS',y:-1100},
        {level: 4, id: 'CSI440', label: 'BD I ', title: 'CSI440 BANCO DE DADOS I',y:-1000},
        {level: 4, id: 'CSI485', label: 'Engenharia de Software I', title: 'CSI485 ENGENHARIA DE SOFTWARE I',y:-900},
        {level: 4, id: 'ENP153', label: 'Programação Linear', title: 'ENP153 PROGRAMACAO LINEAR',y:-800},
    
        {level: 5, id: 'CSI426', label: 'Redes', title: 'CSI426 FUNDAMENTOS DE REDES DE COMPUTADORES',y:-1200},
        {level: 5, id: 'CSI442', label: 'BD II', title: 'CSI442 BANCO DE DADOS II',y:-1100},
        {level: 5, id: 'CSI457', label: 'IA', title: 'CSI457 INTELIGENCIA ARTIFICIAL',y:-1000},
        {level: 5, id: 'CSI476', label: 'FTC', title: 'CSI476 FUNDAMENTOS TEORICOS DA COMPUTACAO',y:-900},
        {level: 5, id: 'CSI486', label: 'Engenharia de Software II', title: 'CSI486 ENGENHARIA DE SOFTWARE II',y:-800},
    
        {level: 6, id: 'CSI419', label: 'Linguagens de Prog', title: 'CSI419 LINGUAGENS DE PROGRAMACAO',y:-1200},
        {level: 6, id: 'CSI433', label: 'Sistemas Distribuidos', title: 'CSI433 SISTEMAS DISTRIBUIDOS',y:-1100},
        {level: 6, id: 'CSI450', label: 'Interacao H-C', title: 'CSI450 INTERACAO HUMANO-COMPUTADOR',y:-1000},
        {level: 6, id: 'CSI477', label: 'Sistemas WEB', title: 'CSI477 SISTEMAS PARA WEB',y:-900},
        {level: 6, id: 'CSI478', label: 'GCES', title: 'CSI478 GERENCIA DE CONFIGURACAO E DE ENGENHARIA DE SOFTWARE',y:-800},
        {level: 6, id: 'HORAS1', label: '1800 HORAS', title: '1800 HORAS',y:-700},
    
        {level: 7, id: 'CSI126', label: 'Gerencia de RH', title: 'CSI126 GERENCIA DE RECURSOS HUMANOS',y:-1200},
        {level: 7, id: 'CSI439', label: 'Gestao da TI', title: 'CSI439 GESTAO DA TECNOLOGIA DA INFORMACAO',y:-1100},
        {level: 7, id: 'CSI493', label: 'Empreendedorismo', title: 'CSI493 EMPREENDEDORISMO',y:-1000},
        {level: 7, id: 'CSI498', label: 'TCC I', title: 'CSI498 TRABALHO DE CONCLUSAO DE CURSO I',y:-900},
        {level: 6, id: 'HORAS2', label: '1200 HORAS', title: '1200 HORAS',y:-800},
    
        {level: 8, id: 'ATV021', label: 'Estagio', title: 'ATV021 ESTAGIO SUPERVISIONADO',y:-1200},
        {level: 8, id: 'CSI462', label: 'Sistemas de AD', title: 'CSI462 SISTEMAS DE APOIO À DECISAO',y:-1100},
        {level: 8, id: 'CSI463', label: 'Seguranca e Auditoria', title: 'CSI463 SEGURANCA E AUDITORIA DE SISTEMAS',y:-1000},
        {level: 8, id: 'CSI499', label: 'TCC II', title: 'CSI499 TRABALHO DE CONCLUSAO DE CURSO II',y:-900},
    
    
        ]);
    
        window.edgesSet = new vis.DataSet([
    
        {to: 'CSI032', from:'CSI030'},
    {to: 'CSI488', from:'CSI030'},
    {to: 'CEA307', from:'CEA423'},
    {to: 'CSI429', from:'CSI032'},
    {to: 'CSI429', from:'CSI488'},
    {to: 'CSI466', from:'CSI443'},
    {to: 'CSI466', from:'CSI488'},
    {to: 'CSI437', from:'CSI424'},
    {to: 'CSI437', from:'CSI488'},
    {to: 'CSI440', from:'CSI488'},
    {to: 'CSI485', from:'CSI032'},
    {to: 'CSI485', from:'CSI488'},
    {to: 'ENP150', from:'CEA423'},
    {to: 'ENP153', from:'CEA036'},
    {to: 'ENP153', from:'CSI030'},
    {to: 'ENP153', from:'CSI488'},
    {to: 'CSI426', from:'CSI437'},
    {to: 'CSI442', from:'CSI429'},
    {to: 'CSI442', from:'CSI440'},
    {to: 'CSI457', from:'CSI466'},
    {to: 'CSI476', from:'CSI466'},
    {to: 'CSI486', from:'CSI485'},
    {to: 'CSI419', from:'CSI476'},
    {to: 'CSI433', from:'CSI426'},
    {to: 'CSI450', from:'CSI485'},
    {to: 'CSI477', from:'CSI426'},
    {to: 'CSI477', from:'CSI440'},
    {to: 'CSI477', from:'CSI486'},
    {to: 'CSI735', from:'CSI486'},
    {to: 'CSI439', from:'CSI460'},
    {to: 'CSI498', from:'HORAS1'},
    {to: 'CSI498', from:'CSI427'},
    {to: 'ENP493', from:'HORAS1'},
    {to: 'CSI462', from:'CSI145'},
    {to: 'CSI462', from:'CSI440'},
    {to: 'CSI462', from:'ENP153'},
    {to: 'CSI463', from:'CSI486'},
    {to: 'CSI499', from:'CSI498'},
    
    
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
    document.getElementById("curso").innerHTML = "Sistemas de Informação";
}

