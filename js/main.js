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
  dest.innerHTML = '';
  arr.forEach((car) => {
    const oneCar = makeSingleCar(car);
    dest.append(oneCar);
  });
}

function makeSingleCar({ id, title, image, price, number_plates }) {
  const divEl = document.createElement('div');
  divEl.className = 'column is-one-third';
  divEl.innerHTML = `
  <h2 class="title">${title}</h2>
  <h3 class="subtitle">${number_plates}</h3>
  <img src="${image}" alt="image" title='${price}' /> <br />
  `;
  const btnEl = document.createElement('button');
  btnEl.textContent = 'delete me';
  btnEl.className = 'button';
  btnEl.onclick = () => deleteCar(id);
  divEl.append(btnEl);
  return divEl;
}

async function deleteCar(id) {
  // fetch method DELETE URL/id
  const deleteConfirm = confirm('ar tikrai istrinti el kurio id:' + id);
  if (deleteConfirm) {
    console.log('deleting ' + id);
    const resp = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    const atsJs = await resp.json();
    console.log('atsJs ===', atsJs);
    if (atsJs.success) {
      console.log('istrinta sekmingai');
      getCars();
    }
  }
}

getCars();
