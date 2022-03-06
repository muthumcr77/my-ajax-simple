const func = async () => {
  console.log("Will this wait?");
  const timer = () => {
    return setTimeout(() => {
      console.log("timer");}, 2000);
  }
  await timer()
  console.log("How about this?");
}
func()

// OUTPUT:
// Will this wait?
// How about this?
// timer