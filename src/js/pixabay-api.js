import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/bi_x-octagon.png';

import axios from 'axios';

// export function searchImages(keyword) {
//   const KEY = '42691654-856ee9298c14d5c2eed97729f';
//   const baseURL = ' https://pixabay.com/api/';
//   const loader = document.querySelector('.loader');

//   loader.style.display = 'block';

//   return fetch(
//     `${baseURL}?key=${KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Image error! ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       loader.style.display = 'none';
//       if (data.hits.length === 0) {
//         iziToast.error({
//           title: '',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           backgroundColor: '#EF4040',
//           messageColor: '#ffffff',
//           position: 'topRight',
//           iconUrl: cross,
//         });
//       }
//       return data;
//     })
//     .catch(error => {
//       iziToast.error({
//         title: '',
//         message: `Error${error}`,
//         backgroundColor: '#EF4040',
//         messageColor: '#ffffff',
//         position: 'topRight',
//         iconUrl: cross,
//       });
//       loader.style.display = 'none';
//     });
// }
const KEY = '42691654-856ee9298c14d5c2eed97729f';
const baseURL = ' https://pixabay.com/api/';

let currentPage = 1;
let loadedItems = 15;

// let totalHits;
// const totalPages = Math.ceil(totalHits / loadedItems);

const loader = document.querySelector('.loader');

export async function searchImages(keyword) {
  // axios.defaults.headers.common['key'] = KEY;

  // axios.defaults.baseURL = '<https://pixabay.com/api/>';
  // axios.defaults.q = `${keyword}`;
  // loader.style.display = 'block';

  try {
    const response = await axios.get(
      `${baseURL}?key=${KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${loadedItems}&page=${currentPage}`
    );
    // {
    //   params: {
    //     image_type: photo,
    //     orientation: horizontal,
    //     safesearch: true,
    //     _limit: 15,
    //     // q: `${keyword}`,
    //   },
    // }
    if (response.data.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        messageColor: '#ffffff',
        position: 'topRight',
        iconUrl: cross,
      });
    }
    loader.style.display = 'none';
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

export async function loadMore() {
  try {
    const response = await searchImages();
    loader.style.display = 'none';
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
