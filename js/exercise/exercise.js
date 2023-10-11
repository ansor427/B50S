// console.log("mulai");

// function prosesSynchronous(){
    // for (let i = 0; i < 5; i++) {
        // console.log("langkah" + i);
    // }
// }
// prosesSynchronous();
// console.log("selesai");

// console.log("mulai");

// function prosesSynchronous(iterasi, callback) {
    // setTimeout(function(){
        // console.log("langkah" + iterasi);
        // callback();
    // }, 1000);
// }
// function akhir() {
    // console.log("selesai");
// }

// for (let i = 0; i < 5; i++) {
    // prosesSynchronous(i, function(){

        // if (i === 4) {
            // akhir();
        // }  
    // });
    
// }

//asyncrhonous function
// menjalankan promise secara langsung
// const isVip = true

// const checkingVip = new Promise((resolve, rejeck) => {
    if(isVip) {
        resolve("Member is Vip")
    } else {
        rejeck("Memeber isnt Vip")
    }
// })

console.log(checkingVip);

// menangkap resolve dan rejeck
const isVip = true

const checkingVip = new Promise((resolve, rejeck) => {
    if(isVip) {
        resolve("Member is Vip")
    } else {
        rejeck("Memeber isnt Vip")
    }
})

checkingVip
.then(response => console.log("Yes." + response))
.catch(response => console.log("No." + response))

// const isVip = true
// const checkingVip = new promise((resolve, rejeck) => {
    if(isVip) {
        setTimeout(() =>{
        resolve("Memeber is Vip")
    }, 2000)
} else {
    setTimeout(() => {
        rejeck("Memeber inst Vip")
    }, 2000)
}
// })

console.log("star")

// check proses async
console.log(checkingVip.then(response => console.log(response)))

// check proses async
checkingVip
    .then(response => console.log("Yes." + response))
    .catch(response => console.log("No." + response))
    
// const isVip = true

// const checkingVip = new Promise((resolve, rejeck) => {
if(isVip) {
    setTimeout(() =>{
        resolve("Memeber is Vip")
    }, 2000)
} else {
    setTimeout(() => {
        rejeck("Memeber inst Vip")
    }, 2000)
}
// })
        
        
console.log("star")

// check proses async
console.log(checkingVip.then(response => console.log(response)))

// check proses async
checkingVip
    // .finally() => console.log(`finished`)
    .then(response => console.log("Yes." + response))
    .catch(response => console.log("No." + response))

console.log("end")
// untuk menjalan promise lebih dari 1 menggunakan .promise all()
// const member = new Promise(resolve =. {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                name: "ansor",
                isMember: true
            }
        ])
    }, 2000)
// })
// const product = new Promise(resolve =. {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                name: "Mansor",
                isMember: 1000
            }
        ])
    }, 1000)
// })

Promise.all([member, product]).then(response => console.log(response))

//implementasi async await
function member() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Finished`)
        }, 2000)
    })
}

async function testingAsync() {
    const runPromise = await member()
    console.log(runPromise)
}
testingAsync()

// implementasi async await dan tri catch
function member() {
    return new Promise((resolve, reject) => {
        const time = 3000
        if(time < 5000) {
            setTimeout(() => {
                resolve(`Finished`)
            }, time)
        } else {
            reject("Time's up")
        }
    })
}
 async function testingAsync() {
    try {
        const runPromise = await member()
        console.log(runPromise)
    } catch (err) {
        console.log(err)
    }
 }
 testingAsync()