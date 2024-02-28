export function scrollHandler() {
  let objects = document.querySelectorAll('.move-up, .move-down, .move-left, .move-right');
  objects.forEach(function (object) {
    let objectPosition = object.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (objectPosition < windowHeight) {
      object.classList.add('move-in');
      object.removeEventListener('transitionend', scrollHandler);
    }
  });
}

// window.addEventListener('scroll', scrollHandler);

export default { scrollHandler }