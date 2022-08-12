import { writable } from 'svelte/store'

export { selectedSlideName, slides }

const selectedSlideName = writable('')

const slides = [
  {
    name: 'Buffalo',
    pic: 'https://images.unsplash.com/photo-1658847344712-7667fc61a597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Monkey',
    pic: 'https://images.unsplash.com/photo-1630475417393-63741a3bfc97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Chameleon',
    pic: 'https://images.unsplash.com/photo-1655269359642-caf63bad5a05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Leo',
    pic: 'https://images.unsplash.com/photo-1654541245278-392677ee68ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
  },
  {
    name: 'Bee',
    pic: 'https://images.unsplash.com/photo-1654920139911-b529a68903c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]
