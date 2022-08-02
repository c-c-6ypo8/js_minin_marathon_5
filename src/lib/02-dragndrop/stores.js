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

const createTasksStore = (initialValue) => {
  const { subscribe, set, update } = writable([...initialValue])
  return {
    subscribe,
    insert: (task, categoryId) => {
      update((tasks) => [...tasks, { ...task, categoryId: categoryId }])
    },
    remove: (taskToRemove) => {
      update((tasks) => tasks.filter((task) => task.id !== taskToRemove.id))
    },
  }
}

export const tasks = createTasksStore([
  {
    id: 'j8aZPjEELGW9_XNX7OzB5',
    categoryId: 'started',
    text: 'Купить продукты',
  },
  {
    id: 'j8aZPjEELGW9_XNX7OzB7',
    categoryId: 'started',
    text: 'Принять душ',
  },
  {
    id: 'j8aZPjEELGW9_XNX7OzB8',
    categoryId: 'processed',
    text: 'Захватить мир',
  },
])

export const tasksByCategory = derived(tasks, ($tasks) => {
  let tBC = { started: [], processed: [], ready: [] }
  for (const task of $tasks) {
    tBC[task.categoryId].push(task)
  }
  return tBC
})
