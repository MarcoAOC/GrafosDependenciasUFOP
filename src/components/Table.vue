<script setup>
defineProps(['tableData'])
</script>
<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="header in tableData.headers" scope="col" class="px-6 py-3">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in tableData.rows" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td v-for="col in row" class="px-6 py-4">
                        {{ col }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
