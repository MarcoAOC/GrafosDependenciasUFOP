<script setup>
import { ref } from 'vue'
const emit = defineEmits(['selected'])
const props = defineProps(['tabs', 'selectedTab'])
const activeTab = ref(props?.selectedTab ?? props?.tabs[0] ?? null)

function isActiveTab(tab) {
    return activeTab.value.id == tab.id
}
function selectTab(tab) {
    activeTab.value = tab;
    emit('selected', tab)
}
</script>

<template>
    <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gsray-700">
        <ul class="flex flex-wrap -mb-px">
            <li class="mr-2 cursor-pointer" v-for="tab in tabs">
                <a @click="() => selectTab(tab)"
                    :class="[{ 'dark:text-blue-500': isActiveTab(tab), 'dark:border-blue-500': isActiveTab(tab), 'border-transparent': !isActiveTab(tab), 'text-blue-600': isActiveTab(tab), 'border-blue-600': isActiveTab(tab) }, 'inline-block', 'p-4', 'border-b-2', 'rounded-t-lg', 'hover:text-gray-600', 'hover:border-gray-300', 'dark:hover:text-gray-300']">{{
                        tab.label }}</a>
            </li>
        </ul>
    </div>
</template>
