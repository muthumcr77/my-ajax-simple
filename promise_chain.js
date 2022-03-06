let x = 1
const myPromise = new Promise((resolve, reject) => {
  if (x == true)
    resolve(1)
  else
    reject(0)
})

myPromise
  .then(res => {
    res = res*2
    return Promise.resolve(res)
  })
  .then(res => {
    if (res === 2)
      return console.log("Success.")
  })