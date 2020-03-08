let giphyKey = "n0hYHEPnSMBxluEhcNLp6IaFOhiO4aOE"
let activate = document.querySelector('button')
let dictionKey="92b36c44-5d9e-4edc-a773-e00334b611d8"

activate.addEventListener('click',()=>{



  fetch(`https://random-word-api.herokuapp.com/all`)
    .then(res => res.json())
    .then(response =>{
      // console.log()
      let randomWord = Math.floor(Math.random()*response.length)
      // console.log(response[randomWord])
      let giphyInput = response[randomWord]
        document.querySelector('p').innerHTML= giphyInput
      // console.log(response)

  fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${giphyInput}?key=${dictionKey}`)
    .then(res => res.json())
    .then(response =>{

      let displayDef = response[0].shortdef[0]
      document.getElementById('definition').innerHTML = displayDef
      // console.log(response[0].shortdef[0])

})

  fetch(`http://api.giphy.com/v1/gifs/search?q=${giphyInput}&api_key=${giphyKey}`)

        .then(res => res.json())
        .then(response =>{
          // console.log(response)
          // console.log(response.data[0].images.original.url)
          let data = response.data[0]
          document.querySelector('img').src = data.images.original.url

        })



    })

  })



// document.querySelector('input').addEventListener('keyup', event => {
//   if(event.key === "Enter") {
//     thingy();
//   }
// })
//
// activate.addEventListener('click', thingy)
//
// function thingy() {
//   let userInput = document.querySelector('input').value
//   fetch(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${key}`)
//
//     .then(res => res.json())
//     .then(response =>{
//       console.log(response)
//       // console.log(response.data[0].images.original.url)
//       document.querySelector('img').src =response.data[0].images.original.url
//
//     })
//   }
//
//
//
// let userInput = document.getElementById('userInput').value
