<script setup>
import { reactive, ref, onMounted } from 'vue';
import Button from '../components/Button.vue';
import Toggle from '../components/Toggle.vue';
import GraphView from './GraphView.vue'
import TimeTable from './TimeTable.vue'

const state = reactive({ isDark: true, view: 'timetable' })

</script>

<template>
  <main :class="[{ dark: state.isDark }]">
    <div class="dark:bg-gray-700">
      <div class="absolute top-0 right-0">
        <Toggle v-model="state.isDark">Dark Mode</Toggle>
      </div>
      <div class="text-xl text-center">
        <h1>Apoio de Matrícula - ICEA UFOP 23.1</h1>
      </div>
      <div class="mt-10 flex">
        <div class="mr-10"><Button @click="state.view = 'graph'">Disciplinas e Dependências</Button></div>
        <div><Button @click="state.view = 'timetable'">Tabela de Horários</Button></div>
      </div>
    </div>
    <GraphView v-if="state.view == 'graph'"></GraphView>
    <TimeTable v-else></TimeTable>
  </main>
</template>