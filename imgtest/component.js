
const gkDiv = document.querySelector('.gk');
const imageContainer = document.querySelector('#image-container');

// add event listener to input field
const inputField = document.querySelector('#input-field');
inputField.addEventListener('input', (event) => {
  const inputString = event.target.value.toLowerCase();
  
  // check if input string matches visibleEntry prop
  if (visibleEntry.props.gk.toLowerCase().includes(inputString)) {
    gkDiv.setAttribute('data-visible-entry', 'true');
  } else {
    gkDiv.removeAttribute('data-visible-entry');
  }
});

// add event listener to visibleEntry prop
const observer = new MutationObserver(() => {
  if (gkDiv.getAttribute('data-visible-entry') === 'true') {
    imageContainer.style.display = 'block';
  } else {
    imageContainer.style.display = 'none';
  }
});
observer.observe(gkDiv, { attributes: true });
