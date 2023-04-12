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
                <input type="search" id="search-dropdown" v-model="searchInput" @focus="dropDownState = true"
                    @blur="dropDownState = false"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    :placeholder="placeholder" required>
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