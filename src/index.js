export default function sortCharactersByHealthDesc(arr) {
  for (const obj of arr) {
    if (typeof (obj.name) === 'undefined' || (typeof (obj.health) === 'undefined')) throw Error('the field values were not set');
    if (typeof (obj.health) !== 'number') throw Error(`type error in field: health. Expected type: number, but found: ${typeof (obj.health)}`);
    if (typeof (obj.name) !== 'string' || obj.name === '') throw Error('type error in field: name.');
  }
  return arr.sort((a, b) => b.health - a.health);
}
