// @ts-nocheck
import { writable, derived } from 'svelte/store'

export const draggedItem = writable()
export const dropCell = writable()

export const categories = [
  { id: 'started', name: 'Начать' },
  { id: 'processed', name: 'В процессе' },
  { id: 'ready', name: 'Готовы' },
]

export const categoriesIds = categories.map((category) => category.id)

export const tasks = writable([
  {
    id: 'j8aZPjEELGW9_XNX7OzB5',
    categoryId: 'started',
    text: 'Перетащи меня',
  },
])

export const tasksByCategory = derived(tasks, ($tasks) => {
  let tBC = { started: [], processed: [], ready: [] }
  for (const task of $tasks) {
    tBC[task.categoryId].push(task)
  }
  return tBC
})

// export const tasksById = derived(tasks, ($tasks) => {
//   let newTasks = []
//   for (const category of Object.keys($tasks)) {
//     for (const task of $tasks[category]) {
//       newTasks.push({ ...task, categoryId: category })
//     }
//   }
//   return newTasks
// })
