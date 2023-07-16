export function createCatCard(data) {
    const markupContainer = document.querySelector('.cat-info');
    const catInfo = data[0].breeds[0];
    const catCard = {
        url: data[0].url,
        name:catInfo.name,
        description: catInfo.description,
        temperament:catInfo.temperament
    }
    console.log(catCard);
   
    markupContainer.innerHTML=catCardMarkup(catCard)
    
}

function catCardMarkup(card) {
     return ` 
      <div>
<img
    src=${card.url}
    alt=${card.name}
    width="650px"></div>
    <div>

  <h1>${card.name}</h1>
  <p>${card.description}</p>
    <div><b>Temperament:</b> ${card.temperament}</div>
    </div> 
`
}