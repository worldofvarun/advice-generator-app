import { getAdvice } from "./api.js";

export function AdviceUI(element) {
  renderResponse(element);

  const buttonElement = element.querySelector('.dice');
  // Render new advice slip when the button is clicked.
  buttonElement.addEventListener('click', () => renderResponse(element));
}

function renderResponse(element) {
  const request = getAdvice();
  // Update the advice slip element with new content once fetched from server.
  request.then(data => {
    const slip = data.slip;
    element.querySelector('#slip-id').textContent = slip.id;
    element.querySelector('#advice').textContent = `"${slip.advice}"`;
  });
}
