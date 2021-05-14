const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// function generateJoke() {
//   const config =   { 
//     headers: {
//     'Accept': 'application/json'
//   }
// }
//   fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then((data) => {
//     jokeEl.innerHTML = data.joke
//   })
// }

//async/await 

async function generateJoke() {
  const config =   { 
    headers: {
      'Accept': 'application/json'
    }
  }
  const response = await fetch('https://icanhazdadjoke.com', config)

  const data = await response.json()

  jokeEl.innerHTML = data.joke
}