<script setup>
import { reactive, ref, watch } from 'vue'
import Table from '../components/Table.vue';
import Search from '../components/Search.vue';
import Button from '../components/Button.vue';
import timeTable from '../generated/time-table.json'
const dropOptions = [
    { label: "Todos", onClick: () => { console.log("clicou aqui") } },
    { label: "DECSI", onClick: () => { console.log("clicou aqui") } },
    { label: "DEELT", onClick: () => { console.log("clicou aqui") } },
    { label: "DECEA", onClick: () => { console.log("clicou aqui") } },
    { label: "DEENP", onClick: () => { console.log("clicou aqui") } },
]
console.log(timeTable)
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

</script>
<template>
    <Search filter-label-drop="Departamentos" :drop-options="dropOptions" :searchList="horarios"
        placeholder="Pesquisar disciplinas" @selected="toggleDisciplina" :search-keys="['code', 'name', 'professor']"
        :render-list-function="renderListFunction"></Search>
    <Table :table-data="tableData"> </Table>
    <div v-for="disciplina in selectedDisciplinas">
        {{ disciplina }}
        <Button @click="() => toggleDisciplina(disciplina)">X</Button>
    </div>
</template>