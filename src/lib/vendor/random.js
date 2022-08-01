export const getRandomNumber = (from, to) => {
  return Math.round(Math.random() * (to - from) + from)
}
