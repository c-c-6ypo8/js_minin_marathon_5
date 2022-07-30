// @ts-nocheck
import { writable } from 'svelte/store'

export const projects = [
  {
    id: 1,
    name: 'Карточки',
    pic: 'https://im.wampi.ru/2022/07/29/project-pic-01.jpg',
    description:
      'Галерея раскрывающихся карточек. Алгоритм улучшен по сравнению с уроком: при повторном нажатии на слайд он возвращается в исходное состояние.',
  },
  {
    id: 2,
    name: 'Drag & Drop',
    pic: 'https://im.wampi.ru/2022/07/29/project-pic-02.png',
    description: 'Мини-клон Trello с эффектом Drag & Drop',
  },
  {
    id: 3,
    name: 'Слайдер',
    pic: 'https://ie.wampi.ru/2022/07/30/2022-07-30_13-45-55.jpg',
    description: 'Впечатляющий слайдер картинок',
  },
]

export const currentPageId = writable(0)
export const selectedPageId = writable(0)
