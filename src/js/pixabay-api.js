import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/bi_x-octagon.png';
import axios from 'axios';

const KEY = '42691654-856ee9298c14d5c2eed97729f';
const baseURL = ' https://pixabay.com/api/';
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

export async function searchImages(keyword, currentPage, itemsPerPage) {
  try {
    const response = await axios.get(
      `${baseURL}?key=${KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${itemsPerPage}&page=${currentPage}`
    );

    if (response.data.hits.length === 0) {
      return iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
        position: 'topRight',
        iconUrl: cross,
      });
    }
    return response.data;
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
