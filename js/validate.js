const body = {
  title: 'asd',
  image: 'https://picsum.photos/id/1003/1181/1772',
  price: 1000,
  number_plates: 'asdas',
};

checkBody(body);

// // objekto reiksmes masyvo pavidalu
// const values = Object.values(body);
// // console.log('values ===', values);
// // values [ 'asd ', 'https://picsum.photos/id/1003/1181/1772', 1000, 'OOO144' ]
// // patikrinam ar yra tusciu values
// const valuesBool = values.map((val) => !!val).filter((val) => val === false);
// // console.log('valuesBool ===', valuesBool);

// // patikrinti ar yra visi keys
// //
// const mustBeKeys = ['title', 'image', 'price', 'number_plates'];
// const ourKeys = Object.keys(body);
// // console.log('ourKeys ===', ourKeys);
// // ar mustBeKeys visi yra ourKeys
// const allKeys = mustBeKeys.filter((mustKey) => !ourKeys.includes(mustKey));
// // console.log('allKeys ===', allKeys);

// if (valuesBool.length > 0 || allKeys.length > 0) {
//   console.log('ne visi duomenys paduoti');
// }

function checkBody(dataToCheck) {
  const mustBeKeys = ['title', 'image', 'price', 'number_plates'];
  const values = Object.values(dataToCheck);
  const valuesBool = values.map((val) => !!val).filter((val) => val === false);
  const ourKeys = Object.keys(dataToCheck);
  const allKeys = mustBeKeys.filter((mustKey) => !ourKeys.includes(mustKey));
  if (valuesBool.length > 0 || allKeys.length > 0) {
    console.log('ne visi duomenys paduoti');
    return false;
  }
  return true;
}
