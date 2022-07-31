// @ts-nocheck
import { writable, derived } from 'svelte/store'

export const draggedItem = writable()
export const dropCell = writable()

export const categories = [
  { id: 'started', name: 'Начать' },
  { id: 'processed', name: 'В процессе' },
  { id: 'ready', name: 'Готовы' },
]

export const tasks = writable({
  started: [
    {
      id: 'j8aZPjEELGW9_XNX7OzB5',
      text: 'Перетащи меня',
    },
  ],
  processed: [],
  ready: [],
})

export const deleteItem = (id) => {}

export const addItem = (id) => {}

export const tasksById = derived(tasks, ($tasks) => {
  let newTasks = []
  for (const category of Object.keys($tasks)) {
    for (const task of $tasks[category]) {
      newTasks.push({ ...task, categoryId: category })
    }
  }
  return newTasks
})
