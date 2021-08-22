export default function sortCharactersByHealthDesc(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
