import { Notify } from 'notiflix';
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import { fetchBreeds,fetchCatByBreed } from "./cat-api";


const breedSelect = document.querySelector('.breed-select')
const loader = document.querySelector('.loader')
const catInfo = document.querySelector('.cat-info')

breedSelect.addEventListener("change", getCatInfo)

fetchBreeds().then((data)=>{
options(data)
breedSelect.classList.remove('is-hiden')
new SlimSelect({
    select: '.breed-select'
  })
 
}).catch((error)=>{
Notify.failure("Oops! Something went wrong! Try reloading the page!")
    }).finally(()=>{
        loader.classList.add('is-hiden')
    })

function options(data){
    const markUp = data.map(({name, id})=>`<option value='${id}'>${name}</option>`
    ).join("")
    breedSelect.innerHTML=markUp
}

function getCatInfo(event){
    catInfo.innerHTML = ""
    loader.classList.remove('is-hiden')
    fetchCatByBreed(event.target.value)
    .then(data=>{
        creatMarkUp(data)
}).catch((error)=>{
    Notify.failure("Oops! Something went wrong! Try reloading the page!")
        }).finally(()=>{
            loader.classList.add('is-hiden')
        })

}

function creatMarkUp(cat){
   const url = cat[0]?.url
const {name, description, temperament} = cat[0]?.breeds[0]
const markUp = `<img src="${url}" alt="cat" width="300" height="250" >
<div>
  <h1>${name}</h1>
  <p>${description}</p>
  <p><b>Temperament: </b>${temperament}</p>
</div>`
catInfo.innerHTML = markUp
}
  

