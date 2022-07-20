
const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random()

            if (rand < 0.5) {
                console.log('Got a dog!')
                resolve()
            }
            reject()
        }, 5000)
    })
}
makeDogPromise().then(() => {
    console.log('BARK!')
}).catch(() => {
    console.log('no dog :(')
})
