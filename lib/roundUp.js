const roundUp = (num) => {
   return Math.ceil(num/100) * 100
}
export const roundUpThousand = (num) => {
   return Math.ceil(num/4000) * 4000
}

export default roundUp
