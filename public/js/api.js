/*Requests and returns an advice slip from the Advice Slip API.*/
export async function getAdvice() {
  return await fetch("https://api.adviceslip.com/advice")
    .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
    .catch(error => console.error('There was an error retrieving data:', error));
}
