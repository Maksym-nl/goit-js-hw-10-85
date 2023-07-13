import { fetchBreeds } from "./cat-api";

const breedSelect = document.querySelector('.breed-select')
const loader = document.querySelector('.loader')
const errorEl = document.querySelector('.error')
const catInfo = document.querySelector('.cat-info')

fetchBreeds().then((data)=>{
options(data)
breedSelect.classList.remove('is-hiden')
}).catch((error)=>{
    console.log(error.message)
    }).finally(()=>{
        loader.classList.add('is-hiden')
    })

function options(data){
    const markUp = data.map(({name, id})=>`<option value='${id}'>${name}</option>`
    ).join("")
    breedSelect.innerHTML=markUp
}