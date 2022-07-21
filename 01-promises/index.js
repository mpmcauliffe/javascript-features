
const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const pages = {
                '/users': [
                    { id: 1, username: 'Jimbo', },
                    { id: 2, username: 'Otis', }
                ],
                '/about': 'This is a page about Bears!'
            }

            const data = pages[url] 

            if (data) {
                resolve({ status: 200, data, })
            }

            reject({ status: 404 })
        
        }, 1000);
    })
}

fakeRequest('/bears').then(res => {  
    console.log('STATUS CODE:', res.status)
    console.log('DATA:', res.data)
    console.log('REQUEST SUCCEEDED')
}).catch(e => {
    console.error('STATUS CODE:', e.status)
    console.log('REQUEST FAILED')
})


// const makeDogPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random()

//             if (rand < 0.5) {
//                 console.log('Got a dog!')
//                 resolve()
//             }
//             reject()
//         }, 5000)
//     })
// }
// makeDogPromise().then(() => {
//     console.log('BARK!')
// }).catch(() => {
//     console.log('no dog :(')
// })
