const gallery = document.querySelector('.gallery');

export function addMarkup(images) {
  const markup = images.hits
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item" >
      <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
      </a>
      <div class="gallery-info-container">
          <p class="gallery-info">
              <span class="gallery-info-span">Likes: <span class="numbers-span">${likes}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Views: <span class="numbers-span">${views}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Comments: <span class="numbers-span">${comments}</span>
              </span>    
          </p>
          <p class="gallery-info">
              <span class="gallery-info-span">Downloads: <span class="numbers-span">${downloads}</span>
              </span>    
          </p>
      </div>
  </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
