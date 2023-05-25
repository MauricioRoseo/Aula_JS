const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

FilmJson.map((item, index) => {
  let filmeItem = c(".modelo .filme-item").cloneNode(true);

  filmeItem.setAttribute('data-key', index);

  filmeItem.querySelector('.filme-item-img img').src = item.img;
  filmeItem.querySelector('.filme-item-name').innerHTML = item.name;
  filmeItem.querySelector('.filme-item-nota').innerHTML = item.notaimdb;
  filmeItem.querySelector('.filme-item-sinopse').innerHTML = item.sinopse;

  filmeItem.querySelector('.bnt-linktree').addEventListener('click', (e) => {
    e.preventDefault();

    let key = e.target.closest(".filme-item").getAttribute('data-key');

    c(".trailer-link").href = FilmJson[key].link_trailer;
    c(".film-link").href = FilmJson[key].link_film;

    c(".linktree").style.opacity = 0;
    c('.linktree').style.display = 'flex';
    setTimeout(() => {
      c('.linktree').style.opacity = 1;
    }, 100);
  });

  c('.modelo-area').append(filmeItem);
});

function closeModal(){
    c('.linktree').style.opacity = 0;
    setTimeout(()=>{
        c('.linktree').style.display = 'none';
    }, 100);
}

cs(".modeloInfo-cancelButton, .modeloInfo-cancelMobileButton").forEach((item)=>{
    item.addEventListener("click", closeModal)
});
