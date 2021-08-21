export default function sortCharactersByHealthDesc(arr) {
    for (let item of arr) {
        if (typeof item.health != "number" || typeof item.name != "string") throw new Error("wrong input data");
    }
    arr = arr.sort(function(a, b) {
        return b.health - a.health
    });
    return arr;

}