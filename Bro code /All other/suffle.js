const cards = ['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];

console.log(cards);

function shuffle(array){
    if (!Array.isArray(array)) {
        throw new TypeError('shuffle expects an array');
    }

    for(let i = array.length - 1; i > 0; i--) {
        const ran = Math.floor(Math.random() * (i + 1));
        [array[i], array[ran]] = [array[ran], array[i]];
    }

    return array;
}

shuffle(cards);
console.log(cards);