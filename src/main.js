'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from './img/bi_x-octagon.png';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { addMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';

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

let currentPage;
let itemsPerPage = 15;
let currentQuery;
let totalPages;
let cardHeight;

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  currentPage = 1``;
  loadMoreBtn.style.display = 'none';
  const QUERY = form.elements.query.value.trim();

  gallery.innerHTML = '';
  loader.style.display = 'block';

  if (QUERY === '') {
    alert('Please enter a keyword to search for an image');
    return;
  }

  searchImages(QUERY, currentPage, itemsPerPage)
    .then(data => {
      currentQuery = QUERY;
      totalPages = Math.ceil(data.totalHits / itemsPerPage);
      addMarkup(data);
      loadMoreBtn.style.display = 'block';
      lightbox.refresh();
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
    })
    .finally(() => {
      form.reset();
      loader.style.display = 'none';
    });
}

loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleLoadMore() {
  loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';
  currentPage += 1;

  if (currentPage === totalPages) {
    loadMoreBtn.style.display = 'none';
    loader.style.display = 'none';
    return iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }

  try {
    const response = await searchImages(
      currentQuery,
      currentPage,
      itemsPerPage
    );

    addMarkup(response);
    smoothScrollBy();
    lightbox.refresh();
    loader.style.display = 'none';
    loadMoreBtn.style.display = 'block';
  } catch (error) {
    iziToast.error({
      title: '',
      message: `Error${error}`,
      backgroundColor: '#EF4040',
      messageColor: '#ffffff',
      position: 'topRight',
      iconUrl: cross,
    });
  }
}

function smoothScrollBy() {
  cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
