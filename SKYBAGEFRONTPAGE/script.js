  
          const prevButton = document.querySelector('.prev-button');
          const nextButton = document.querySelector('.next-button');
          const slidesWrapper = document.querySelector('.slides-wrapper');
      
          let slideIndex = 0;
      
          prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + slidesWrapper.children.length) % slidesWrapper.children.length;
            slidesWrapper.style.transform = `translateX(-${slideIndex * (100 / slidesWrapper.children.length)}%)`;
          });
      
          nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slidesWrapper.children.length;
            slidesWrapper.style.transform = `translateX(-${slideIndex * (100 / slidesWrapper.children.length)}%)`;
          });


          // function toggleImage(showId, hideId) {
          //   var showImage = document.getElementById(showId);
          //   var hideImage = document.getElementById(hideId);
      
          //   showImage.classList.remove('hidden');
          //   hideImage.classList.add('hidden');
          // }
        



