import './styles.css';
import imageList from './templates/gallery-items.hbs'
import imageApi from './js/apiService'
import {markupCreationForm,markupCreationUl,markupCreationButton} from './js/markup-cretion.js'
// import * as basicLightbox from '../node_modules/basiclightbox/dist/basicLightbox.min'
// import '../node_modules/basiclightbox/dist/basicLightbox.min.css'

document.body.append(markupCreationForm())
document.body.append(markupCreationUl())
document.body.append(markupCreationButton())

const refs = {
    input: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    button: document.querySelector('.load-more__btn'),
    img: document.querySelector('.photo-card > img')
}

refs.input.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget
    imageApi.query = form.elements.query.value;
    form.reset()
    refs.gallery.innerHTML = ''
    imageApi.resetPage();
    refs.button.classList.remove('is-hidden')
    fetchImage()
    
})

refs.button.addEventListener('click',fetchImage) 


function fetchImage (){
    imageApi.fetchImage().then(hits => {
        imageCardMarkup(hits);
        refs.button.classList.remove('is-hidden')
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth'
          });
    });
}

function imageCardMarkup(data){
    const markup = imageList(data)
    refs.gallery.insertAdjacentHTML('beforeend', markup)
}
