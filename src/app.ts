const getAge = (date: string): number => {
    const currentDate: number = new Date().getTime()
    const birthDate: number = new Date(date as unknown as string).getTime()
    const age: number = currentDate - birthDate
    return Math.floor(age / 365 / 24 / 60 / 60 / 1000)
}

console.log(getAge('2014-12-07'))
console.log(getAge('2000-06-20'))
console.log(getAge('1979-10-16'))
