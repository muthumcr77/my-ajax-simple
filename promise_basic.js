const func = (num) => {return new Promise((resolve, error) => {
  if (num == 1)
    resolve("Resolved!")
  else
    error("Error!")
})}

func(false)
.then(
  (response) => {console.log(response);},
  (reject) => {console.log(reject);} 
)
func(true)
.then(
  (response) => {console.log(response);},
  (reject) => {console.log(reject);} 
)