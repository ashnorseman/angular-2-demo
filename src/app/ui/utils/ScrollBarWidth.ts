/**
 * calculate the scroll bar width of the browser (if any)
 */


export const ScrollBarWidth = (function () {
  document.body.style.overflow = 'hidden';

  let width = document.body.clientWidth;

  document.body.style.overflow = 'scroll';
  width -= document.body.clientWidth;

  if (!width) {
    width = document.body.offsetWidth - document.body.clientWidth;
  }

  document.body.style.overflow = '';

  return width;
}());
