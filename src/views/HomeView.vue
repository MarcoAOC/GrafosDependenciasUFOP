<script setup>
import { reactive, ref, onMounted } from 'vue';
import Button from '../components/Button.vue';
import Toggle from '../components/Toggle.vue';
import Tabs from '../components/Tabs.vue';
import GraphView from './GraphView.vue'
import TimeTable from './TimeTable.vue'

const state = reactive({ isDark: true, view: 'graph' })
const tabs = [{
  label: 'Disciplinas e Dependências',
  id: 'graph'
}, {
  label: 'Tabela de Horários',
  id: 'timetable'
}]

const selectedTab = (tab) => {
  state.view = tab.id
}
</script>

<template>
  <main :class="[{ dark: state.isDark }]">
    <div class="dark:bg-gray-700 p-10">
      <div>
        <div class="absolute top-0 right-0">
          <Toggle v-model="state.isDark">Dark Mode</Toggle>
        </div>
        <div class="text-xl text-center">
          <h1>Apoio de Matrícula - ICEA UFOP 23.1</h1>
        </div>
      </div>

      <Tabs :tabs="tabs" @selected="selectedTab"></Tabs>
      <GraphView v-if="state.view == 'graph'"></GraphView>
      <TimeTable v-else></TimeTable>
    </div>
  </main>
</template>