const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
let toys;

// YOUR CODE HERE




document.addEventListener('DOMContentLoaded',()=>{
  getToys()
  addBtn.addEventListener('click', (e) => {
    // console.log(e.target);
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener here
    const submitbtn = document.querySelector('.submit')
    submitbtn.addEventListener('click', postNewToy)
    } else {
      toyForm.style.display = 'none'
    }
  })
  document.addEventListener('click', e => {
    // console.log(e.target.parentNode.querySelector('p').innerText.split(' ')[0])
  if(e.target.className === 'like-btn'){
    // e.preventDefualt()
    const theToy = toys.find(toy => toy.id == e.target.id)
    theToy.likes++
    patchUrl(theToy)
    const toyCollection = document.getElementById('toy-collection');
    toyCollection.innerHTML = ''
    renderToys(toys)

  } else if (e.target.className === 'delete-btn') {
    const theToy = toys.find(toy => toy.id == e.target.id)
    deleteUrl(theToy)
    const toyCollection = document.getElementById('toy-collection');
    toyCollection.innerHTML = ''
    renderToys(toys)
  }
})

})//DOMContentLoaded-end

function patchUrl(theToy){
  let Obj = {method: 'PATCH',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
  "likes":`${theToy.likes}`})}
  fetch(`http://localhost:3000/toys/${theToy.id}`, Obj)
  .then(res => res.json())
  .then(json => {
  })
toys
}


function deleteUrl(theToy){
  // let Obj = {method: 'DELETE',
  // headers: {"Content-Type": "application/json"},
  // body: JSON.stringify({
  // "likes":`${theToy.likes}`})}
  fetch(`http://localhost:3000/toys/${theToy.id}`, {method:'DELETE'})
  .then(res => res.json())
  .then(function(response){
    getToys()
  })

}




function postNewToy(e){
  let Obj = {method: 'POST',
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
  "name": document.querySelectorAll('.input-text')[0].value,
  "image": document.querySelectorAll('.input-text')[1].value,
  "likes": 0})}
  fetch('http://localhost:3000/toys', Obj)
  .then(res => res.json())
  .then(json => {
    // console.log('hey',json);
    const toyCollection = document.getElementById('toy-collection');
    // toyCollection.innerHTML += displayToys(json)
  })
}



function getToys(){
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(json => {
    toys = json
    renderToys(toys)
    // console.log(toys);
  })
}


function renderToys(toys){
const toyCollection = document.getElementById('toy-collection')
// console.log(toys)
toyCollection.innerHTML = ''
toys.forEach(toy => {
  toyCollection.innerHTML += displayToys(toy)
})

}


function displayToys(toy){
  return `<div class="card" id=${toy.id}>
      <h2>${toy.name}</h2>
      <img src='${toy.image}' class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn" id=${toy.id}>Like <3</button>
      <button class="delete-btn" id=${toy.id}>Delete 😭</button>
    </div>`
}

buttons = document.querySelectorAll('.like-btn')

buttons.forEach(function(button){
  button.addEventListener
}
