// @ts-nocheck
import { writable } from 'svelte/store'

// import projectPic01 from './../assets/project-pic-01.jpg'
// import projectPic02 from './../assets/project-pic-02.jpg'

export const projects = [
  {
    id: 1,
    name: 'Карточки',
    // pic: projectPic01,
    pic: 'https://im.wampi.ru/2022/07/29/project-pic-01.jpg',
    description:
      'Галерея раскрывающихся карточек. Алгоритм улучшен по сравнению с уроком: при повторном нажатии на слайд он возвращается в исходное состояние.',
  },
  {
    id: 2,
    name: 'Drag & Drop',
    // pic: projectPic02,
    pic: '    https://im.wampi.ru/2022/07/29/project-pic-02.png',
    description: 'Мини-клон Trello с эффектом Drag & Drop',
  },
]

export const currentPageId = writable(0)
export const selectedPageId = writable(0)
