const URL = 'http://localhost:3000/cars';

const formEl = document.forms.add;

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('JS form control');
  const { title, image, price, number_plates } = formEl.elements;

  const formValues = {
    title: title.value,
    image: image.value,
    price: price.value,
    number_plates: number_plates.value,
  };
  console.log('formValues ===', formValues);
  if (isThereErrors(formValues)) {
    alert('visi laukai privalomi');
    return;
  }
  createCarFetch(formValues);
});

async function createCarFetch(newCarData) {
  const resp = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCarData),
  });
  const atsJs = await resp.json();
  console.log('atsJs ===', atsJs);
}

function isThereErrors(dataToCheck) {
  const mustBeKeys = ['title', 'image', 'price', 'number_plates'];
  const values = Object.values(dataToCheck);
  const valuesBool = values.map((val) => !!val).filter((val) => val === false);
  const ourKeys = Object.keys(dataToCheck);
  const allKeys = mustBeKeys.filter((mustKey) => !ourKeys.includes(mustKey));
  if (valuesBool.length > 0 || allKeys.length > 0) {
    console.log('ne visi duomenys paduoti');
    return true;
  }
  return false;
}
