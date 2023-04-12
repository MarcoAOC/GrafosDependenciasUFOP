<script setup>
defineEmits(['update:modelValue'])
defineProps(['label', 'options', 'emptyLabel', 'modelValue'])

</script>

<template>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="null" selected>{{ emptyLabel ?? label }}</option>
        <option v-for="option in options" :value="option.value"> {{ option.label }}</option>
    </select>
</template>