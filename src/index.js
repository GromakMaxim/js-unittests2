export default function sortCharactersByHealthDesc(arr) {
    arr = arr.sort(function(a, b) {
        return b.health - a.health
    });
    return arr;

}