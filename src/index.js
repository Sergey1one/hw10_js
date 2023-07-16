import { fetchBreeds, fetchCatByBreed } from "./cat-api";
 import SlimSelect from 'slim-select'


const refs = {
    selectField: document.querySelector('.breed-select'),
    loaderMsg: document.querySelector('.loader'),
    errorMsg: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info')
}



refs.errorMsg.hidden=true
refs.selectField.hidden=true

fetchBreeds();



// new SlimSelect({
//   select: '#single'
// })

// console.log(SlimSelect)
refs.selectField.addEventListener("change", onChangeSelect)


function onChangeSelect(evt) {
    evt.preventDefault();
    refs.loaderMsg.hidden=false
    console.log(refs.catInfo.hidden)
     refs.catInfo.hidden = true;
    const breedId = evt.currentTarget.value;
    fetchCatByBreed(breedId)

}



