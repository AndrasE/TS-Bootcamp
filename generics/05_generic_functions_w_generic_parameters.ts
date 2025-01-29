const someData = {
    title: "TS",
    subtitle: "Bootcamp",
    lessonCount: 321,
}

const moreData = {
    seqNum: 19,
    prize: 42
}

export function  merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U)
}