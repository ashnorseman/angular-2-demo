/**
 * UI constants
 */


// the class name added to body when a modal is opened
export const maskedClassName = 'modal-masked';


// calculated scroll bar width of the browser (if any)
export const scrollBarWidth = (function () {
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
