<script setup>
import { ref, computed } from 'vue'
defineEmits(['update:modelValue', 'selected'])
const props = defineProps(['filterLabelDrop', 'dropOptions', 'placeholder', 'searchList', 'searchKeys', 'renderListFunction'])

const dropDownState = ref(false)
const searchInput = ref(null)

const validateTest = (val, searchTokens) => {
    if (searchTokens.length > 1) {
        return searchTokens.reduce((curr, prev) => {
            if (curr === false || curr == true)
                return curr && val.toLowerCase().includes(prev)
            else
                return val.toLowerCase().includes(curr) && val.toLowerCase().includes(prev)
        })
    }

    return val.toLowerCase().includes(searchTokens[0])

}

const genFilter = (obj, searchVal, searchKeys) => {
    const lowerSearch = searchVal.toLowerCase().split(" ")
    return searchKeys.reduce((curr, prev) => {
        if (curr === false || curr == true)
            return curr || validateTest(obj[prev], lowerSearch)
        else
            return validateTest(obj[curr], lowerSearch) || validateTest(obj[prev], lowerSearch)
    })
}
const searchOptionsShow = computed(() => {
    const searchValue = searchInput.value
    if (searchValue && searchValue.length >= 3) {
        return props.searchList.filter(x =>
            genFilter(x, searchValue, props.searchKeys)
        ).slice(0, 15)
    }
    return props.searchList.slice(0, 15)
})
</script>

<template>
    <form>
        <div class="flex relative">
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="placeholder" required v-model="searchInput" @focus="dropDownState = true"
                    @blur="dropDownState = false">
                <div v-show="dropDownState"
                    class="z-10 top-10 w-full absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li v-for="option in searchOptionsShow">
                            <button type="button" @mousedown="() => $emit('selected', option)"
                                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {{ renderListFunction(option) }}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </form>
</template>