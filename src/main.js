'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from './img/bi_x-octagon.png';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { addMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';
import { loadMore } from './js/pixabay-api.js';

const options = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery-item a', options);
lightbox.on('show.simplelightbox');

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentPage = 1;
let loadedItems = 15;
let currentQuery;
let totalPages;

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const QUERY = form.elements.query.value.trim();

  gallery.innerHTML = '';
  loader.style.display = 'block';

  if (QUERY === '') {
    alert('Please enter a keyword to search for an image');
    return;
  }

  searchImages(QUERY)
    .then(data => {
      currentQuery = QUERY;
      totalPages = Math.ceil(data.totalHits / loadedItems);
      addMarkup(data);
      lightbox.refresh();
      form.reset();
      loadMoreBtn.style.display = 'block';
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: `Error${error}`,
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
        position: 'topRight',
        iconUrl: cross,
      });
    });
}

loadMoreBtn.addEventListener('click', handleLoadMore);

function handleLoadMore() {
  currentPage += 1;
  loader.style.display = 'block';

  if (currentPage === totalPages) {
    loadMoreBtn.style.display = 'none';
    return iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }

  loadMore()
    .then(data => {
      console.log(currentPage);
      console.log(data);
      gallery.innerHTML += addMarkup(data);
      lightbox.refresh();
      loadMoreBtn.style.display = 'block';
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message: `MAINError${error}`,
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
        position: 'topRight',
        iconUrl: cross,
      });
    });
  // .finally
  // loadMoreBtn.style.display = 'none';
}
