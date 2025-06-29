const cardItem = document.querySelectorAll('.card__item');

function Search(keyword){
    cardItem.forEach(kart =>{
        const ad = kart.querySelector('span').textContent.toLowerCase();
        if(ad.includes(keyword.toLowerCase())){
            kart.style.display = 'flex';
        }
        else{
            kart.style.display ='none';
        }
    });
}

document.querySelector('.search__button').addEventListener('click',()=>{
    const aranan = document.querySelector('.search__input').value;
    Search(aranan);
});