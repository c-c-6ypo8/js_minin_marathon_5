// @ts-nocheck
import { writable } from 'svelte/store'

import projectPic01 from './../assets/project-pic-01.jpg'
import projectPic02 from './../assets/project-pic-01.jpg'

export const projects = [
  {
    id: 1,
    name: 'Карточки',
    pic: projectPic01,
    description: 'Галерея раскрывающихся карточек',
  },
  {
    id: 2,
    name: 'Drag & Drop',
    pic: projectPic02,
    description: 'Мини-клон Trello с эффектом Drag & Drop',
  },
]

export const selectedProjectId = writable(0)
