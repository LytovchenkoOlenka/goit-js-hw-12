'use strict';
import iziToast from 'izitoast';
import cross from './img/bi_x-octagon.png';
import { addMarkup } from './js/render-functions.js';
import { searchImages } from './js/pixabay-api.js';
import {
  loader,
  currentPage,
  currentQuery,
  itemsPerPage,
  totalPages,
  loadMoreBtn,
  iziToastInfo,
  smoothScrollBy,
  lightbox,
} from './main.js';

export async function handleLoadMore() {
  // loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';
  currentPage += 1;

  try {
    const response = await searchImages(
      currentQuery,
      currentPage,
      itemsPerPage
    );

    if (currentPage === totalPages) {
      loadMoreBtn.style.display = 'none';
      loader.style.display = 'none';
      iziToastInfo();
    }

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
