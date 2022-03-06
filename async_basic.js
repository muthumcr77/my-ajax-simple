const func = async () => {
  return "Hello there!"
}

func().then(
  response => { console.log(response);},
  error => { console.log(error);}
)