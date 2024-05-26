document.addEventListener('DOMContentLoaded', function () {
    const nextSlideButtons = document.querySelectorAll('.next-slide');
    const prevSlideButtons = document.querySelectorAll('.prev-slide');
    const imageLists = document.querySelectorAll('.image-list');
  
    nextSlideButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const imageList = imageLists[index];
        const scrollAmount = imageList.clientWidth;
        imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    });
  
    prevSlideButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const imageList = imageLists[index];
        const scrollAmount = imageList.clientWidth;
        imageList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    });
  
    imageLists.forEach(imageList => {
      const scrollThumb = imageList.nextElementSibling.querySelector('.scrollbar-thumb');
      const updateScrollThumb = () => {
        const scrollRatio = imageList.scrollLeft / (imageList.scrollWidth - imageList.clientWidth);
        scrollThumb.style.width = `${imageList.clientWidth / imageList.scrollWidth * 100}%`;
        scrollThumb.style.transform = `translateX(${scrollRatio * 100}%)`;
      };
  
      imageList.addEventListener('scroll', updateScrollThumb);
      window.addEventListener('resize', updateScrollThumb);
      updateScrollThumb();  // Initial update on load
    });
  });
  