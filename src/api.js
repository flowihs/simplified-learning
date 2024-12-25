export function fakeFetch () {

    return new Promise (resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

export function fetchApi () {

    return new Promise (resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })

}