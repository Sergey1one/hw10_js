export { fetchBreeds, fetchCatByBreed };
import { createCatCard } from "./card-markup";
import axios from "axios";
// import SlimSelect from 'slim-select'
   
const API_KEY = "live_m2CgIiSJjYKbCizQO0kPvlMPqk19FtctzUhopda7BWRev9hqW5hPGCGeqnc2zxQA"
const url = `https://api.thecatapi.com/v1/breeds`;
const urlSelect = `https://api.thecatapi.com/v1/images`;

const options = {
        headers: {
            'x-api-key': API_KEY
        }
    };
    

function fetchBreeds() {
    
    axios.get(url, options).then(response => {
        const selectionField = document.querySelector('.breed-select');
        selectionField.hidden = false;
        selectionField.innerHTML = createSelectOptions(response.data);
    }).catch((error) => {
        onError();
         document.querySelector('.breed-select').hidden = true;
    })
    
}

function fetchCatByBreed(breedId) {
    document.querySelector('.loader').style.display = "";
    document.querySelector('.cat-info').style.display = "none"
    const urlforSelect = urlSelect + `/search?breed_ids=${breedId}`;
//     fetch(urlforSelect, options).then((response) => {
//         return response.json()
//     }).
//         then((data) => {
//             // document.querySelector('.loader').hidden=false
//             document.querySelector('.cat-info').style.display = "flex";
//             createCatCard(data);
//             document.querySelector('.loader').hidden = true;
            
//         }
          
//     ).catch(() => {
//         console.log(document.querySelector('.error'))
//        

//             })
    axios.get(urlforSelect, options).then(response => {
 document.querySelector('.cat-info').style.display = "flex";
            createCatCard(response.data);
            document.querySelector('.loader').hidden = true;
    }
        ).catch(()=> onError())
}

function createSelectOptions(data){
     document.querySelector('.loader').style.display="none"
   return data.map(({ id, name }) => {
        return `<option value=${id}>${name}</option>`}).join("");

}

function onError() {
    document.querySelector('.error').hidden = false;
        document.querySelector('.loader').hidden = true;
}
