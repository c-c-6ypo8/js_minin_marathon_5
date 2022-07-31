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
    description:
      'Мини-клон Trello с эффектом Drag & Drop. По сравнению с уроком добавлены две дополнительные задачи и в соответствии с этим улучшена логика. Теперь (теоретически) можно без проблем добавлять любое количество задач и реализовывать любую логику работы с ними.',
  },
  {
    id: 3,
    name: 'Слайдер',
    pic: 'https://ie.wampi.ru/2022/07/30/2022-07-30_13-45-55.jpg',
    description: 'Впечатляющий слайдер картинок.',
  },
  {
    id: 4,
    name: 'Ховер-доска',
    pic: 'https://ic.wampi.ru/2022/07/31/project-pic-04.png',
    description: 'Визуальная мини-игра с динамической генерацией контента.',
  },
]

export const currentPageId = writable(0)
export const selectedPageId = writable(0)
