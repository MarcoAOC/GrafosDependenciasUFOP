<script setup>
import { reactive, ref } from 'vue'
import Table from '../components/Table.vue';
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Button from '../components/Button.vue';
import timeTable from '../generated/time-table.json'

const horarios = Object.keys(timeTable).map(key => {
    return timeTable[key].times.map(time => ({ code: key, name: timeTable[key].name, time: time.horario, professor: time.professor, curso: time.curso, turma: time.turma }))
}).flat()
const unique = [...new Set(horarios.map(time => time.time.slice(4, 15)))].sort((a, b) => +a.slice(0, 2) - +b.slice(0, 2))
const tableData = reactive({
    headers: ['Horário', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', "Sexta-Feira"],
    rows: [
        ...unique.map(horario => [horario, '', '', '', '', ''])
    ]
})
const selectedDisciplinas = ref([])

function renderListFunction(data) {
    return `${data.code} - ${data.name} - ${data.professor} - ${data.time} - ${data.curso} - ${data.turma}`
}
function toggleDisciplina(x) {
    tableData.rows = [...unique.map(horario => [horario, '', '', '', '', ''])]
    const validator = (disciplina) => disciplina.code === x.code && disciplina.curso == x.curso && disciplina.time == x.time && disciplina.turma == x.turma && disciplina.professor == x.professor
    if (selectedDisciplinas.value.find(validator)) {
        selectedDisciplinas.value = selectedDisciplinas.value.filter((x) => !validator(x))
    }
    else {
        selectedDisciplinas.value.push(x)
    }
    const updateCell = (cell, newValue) => {
        if (cell === '') {
            return newValue
        }
        else {
            return cell + '  -  ' + newValue
        }
    }
    selectedDisciplinas.value.forEach(disciplina => {
        const time = disciplina.time.slice(4, 15)
        const idx = tableData.rows.findIndex(x => x[0] == time)
        const date = disciplina.time.slice(0, 3)
        tableData.rows[idx][daySelectionCol(date)] = updateCell(tableData.rows[idx][daySelectionCol(date)], disciplina.code)
        if (disciplina.time.includes('/')) {
            const time2 = disciplina.time.slice(25, 36)
            const idx2 = tableData.rows.findIndex(x => x[0] == time2)
            const date2 = disciplina.time.slice(21, 24)
            tableData.rows[idx2][daySelectionCol(date2)] = updateCell(tableData.rows[idx2][daySelectionCol(date2)], disciplina.code)

        }
    })
}
function daySelectionCol(dateAbr) {
    switch (dateAbr) {
        case 'SEG':
            return 1
        case 'TER':
            return 2
        case 'QUA':
            return 3
        case 'QUI':
            return 4
        case 'SEX':
            return 5
    }
}

function readableDate(dateAbr) {
    switch (dateAbr) {
        case 'SEG':
            return 'Segunda'
        case 'TER':
            return 'Terca'
        case 'QUA':
            return 'Quarta'
        case 'QUI':
            return 'Quinta'
        case 'SEX':
            return 'Sexta'
    }
}

</script>
<template>
    <div>
        <Search class="mt-6" :searchList="horarios" placeholder="Pesquisar disciplinas" @selected="toggleDisciplina"
            :search-keys="['code', 'name', 'professor']" :render-list-function="renderListFunction"></Search>
        <Table class="mt-6" :table-data="tableData"> </Table>
        <div class="mt-8 mb-10 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
           Matérias selecionadas
        </div>
        <div class="flex flex-wrap gap-2.5 mt-4 mb-20">
            <div class="w-96" v-for="disciplina in selectedDisciplinas">
                <Card>
                    <template #title>
                        <div class="flex">
                            <div>{{ disciplina.code }}</div>
                            <div class="ml-auto"><Button @click="() => toggleDisciplina(disciplina)">X</Button></div>
                        </div>
                    </template>
                    <template #description>
                        {{ disciplina.name }}
                        <br>
                        {{ 'TURMA ' + disciplina.turma }}
                        <br>
                        {{ readableDate(disciplina.time.slice(0, 3)) }}
                        {{ disciplina.time.includes('/') ? 'e ' +readableDate(disciplina.time.slice(21, 24)): '' }}
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>