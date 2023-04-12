<script setup>
import VisNetwork from '../components/VisNetwork.vue';
import Select from '../components/Select.vue';
import { reactive } from 'vue';
import computacao from '../generated/CJM.json';
import eletrica from '../generated/EJM.json';
import sistemas from '../generated/SJM.json';
import producao from '../generated/PJM.json';

const COURSES = {
    CJM: { label: 'Engenharia de Computação', id: 'CJM', file: computacao },
    PJM: { label: 'Engenharia de Produção', id: 'PJM', file: producao },
    EJM: { label: 'Engenharia Elétrica', id: 'EJM', file: eletrica },
    SJM: { label: 'Sistemas de Informação', id: 'SJM', file: sistemas },
}
const options = [
    { label: COURSES.CJM.label, value: COURSES.CJM.id },
    { label: COURSES.PJM.label, value: COURSES.PJM.id },
    { label: COURSES.EJM.label, value: COURSES.EJM.id },
    { label: COURSES.SJM.label, value: COURSES.SJM.id },
]
const state = reactive({ selectedCourse: null })
</script>
<template>
    <div class="w-100 bg-gray-500 p-10 flex">
        <div class="flex-none w-64">
            <div class="w-100 p-10">
                <h3 class="font-bold">Legenda:</h3>
                <ul class="list-disc">
                    <li>Cada coluna é referente a um período</li>
                    <li>Cinza: Matéria não pode ser Feita</li>
                    <li>Verde: Matéria pode ser feita</li>
                    <li>Azul: Matéria Feita</li>

                </ul>
                <h3 class="font-bold mt-10">Dicas:</h3>
                <ul class="list-disc">
                    <li>Recomendado utilizar no computador</li>
                    <li>É possível marcar matérias mesmo sem ter os pré requisitos necessário para poder usar "quebra de pré
                        requisito"</li>
                    <li>É possível reordenar as matérias no "eixo" do período</li>
                    <li>Ao colocar o mouse em cima de um nó de matéria é possivel ver o nome e código da disciplina</li>
                    <li>Ao clicar e segurar em uma matéria, as arestas que incidem e ascendem do mesmo são destacadas</li>
                    <li>Em caso de sumir algum nó de matéria, reinicie a página</li>
                </ul>
            </div>
        </div>
        <div class="flex-1 w-64">
            <div class="card">
                <div class="row">
                    <Select v-model="state.selectedCourse" label="Selectione um curso" :options="options" />
                    <div class="mt-6 border-2 border-black rounded-md flex-col h-[45rem]">
                        <VisNetwork :selectedCourse="COURSES[state?.selectedCourse]"></VisNetwork>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>