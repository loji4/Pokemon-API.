function updateImage() {
    let userinput = document.querySelector('#userinput').value
    fetch (`https://pokeapi.co/api/v2/pokemon/${userinput}`)  
    //returns a promise that fetches the url
      .then(function(results) {
        return results.json()
      })
      .then(function(pokemondata) {
        var spriteurl = pokemondata.sprites.front_default
        var pokemonimg = document.querySelector('#pokemonimg')
        pokemonimg.src = spriteurl
      })
  }
  
  document.querySelector('#userinput').addEventListener('change',updateImage)
  
  