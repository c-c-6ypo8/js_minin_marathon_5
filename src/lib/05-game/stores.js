import { writable } from 'svelte/store'

export const gameTime = writable(0)
export const score = writable(0)

export const circleColors = [
  {
    color1: '#46aef7',
    color2: '#30c7ec',
    color3: '#16d9e3',
  },
  {
    color1: 'rgba(219,62,44,1)',
    color2: 'rgba(219,98,44,1)',
    color3: 'rgba(219,117,44,1)',
  },
  {
    color1: 'rgba(44,219,60,1)',
    color2: 'rgba(95,219,44,1)',
    color3: 'rgba(44,219,134,1)',
  },
  {
    color1: 'rgba(113,44,219,1)',
    color2: 'rgba(144,44,219,1)',
    color3: 'rgba(168,44,219,1)',
  },
]
