export default {
  //gets one random "would you rather" question from the api
  getRandomWYR() {
    //sends a request to /wyr (vite proxy will forward to the express server)
    return fetch('/wyr').then(response => {
      //converts the response to json and returns it
      return response.json()
    })
  }
}
