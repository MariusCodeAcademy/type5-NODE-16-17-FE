const URL = 'http://localhost:3000/cars';
const cardsDestination = document.querySelector('.columns');

async function getCars() {
  const resp = await fetch(URL);
  const jsData = await resp.json();
  if (jsData.error) {
    console.log('turim klaidu');
  }
  console.log('jsData ===', jsData);
  renderCars(jsData, cardsDestination);
}

function renderCars(arr, dest) {
  dest.innerHTML = arr
    .map(
      (car) => `
  <div class="column is-4">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title"> ${car.title} <br/>  </p>
      </header>
      <div class="card-content"> 
      <span class="subtitle">${car.number_plates}</span></div>
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="${car.image}"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer class="card-footer">
        <button onclick='deleteCar(${car.id})'  data-id='${car.id}' class="card-footer-item">Delete</button>
      </footer>
    </div>
  </div>
  `
    )
    .join('');
}

function deleteCar(id) {
  // fetch method DELETE URL/id
  const deleteConfirm = confirm('ar tikrai istrinti');
  if (deleteConfirm) {
    console.log('deleting ', id);
  }
  // getCars();
}

getCars();
