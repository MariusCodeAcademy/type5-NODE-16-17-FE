const URL = 'http://localhost:3000/cars';

async function getCars() {
  const resp = await fetch(URL);
  const jsData = await resp.json();
  console.log('jsData ===', jsData);
  renderCars(jsData);
}

function renderCars(arr) {}

getCars();
