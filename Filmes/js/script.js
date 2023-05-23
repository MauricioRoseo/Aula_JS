const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

FilmJson.map((item, index)=>{
    let filmeItem = c(".modelo .filme-item").cloneNode(true);

    filmeItem.setAttribute('data-key', index);

    filmeItem.querySelector('.filme-item-img img').src = item.img;
    filmeItem.querySelector('.filme-item-name').innerHTML = item.name;
    filmeItem.querySelector('.filme-item-nota').innerHTML = item.notaimdb;
    filmeItem.querySelector('.filme-item-sinopse').innerHTML = item.sinopse;

    c('.modelo-area').append(filmeItem);
})