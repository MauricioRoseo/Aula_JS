const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

FilmJson.map((item, index)=>{
    let filmeItem = c(".modelo .filme-item").cloneNode(true);

    filmeItem.setAttribute('data-key', index);

    filmeItem.querySelector('.filme-item-img img').src = item.img;
    filmeItem.querySelector('.filme-item-name').innerHTML = item.name;
    filmeItem.querySelector('.filme-item-nota').innerHTML = item.notaimdb;
    filmeItem.querySelector('.filme-item-sinopse').innerHTML = item.sinopse;

    filmeItem.querySelector('.bnt-linktree').addEventListener('click', (e) =>{
        e.preventDefault();

        let key = e.target.closest(".modelo-item").getAttribute('data-key');

        c(".assitir-bnt a .trailer-link").href = BDD[key].link_trailer
        c(".assitir-bnt a .film-link").href = BDD[key].link_film

        c(".linktree").style.opacity = 0;
        c('.linktree').style.display = 'flex';
        setTimeout(() =>{
            c('.linktree').style.opacity = 1;
        }, 100)
    });

    c('.modelo-area').append(filmeItem);
})