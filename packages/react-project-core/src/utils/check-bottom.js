/**
 * check if you are near the bottom of the page
 * @param  {number} bottom number of pixels from bottom to check for
 * @return {boolean}       whether or not you are there
 */
function checkBottom(bottom) {
  const windowHeight =
    'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.offsetHeight;
  const body = document.body;
  const html = document.documentElement;
  const docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const windowBottom = windowHeight + window.pageYOffset;
  return windowBottom >= docHeight - bottom;
}

export default checkBottom;
