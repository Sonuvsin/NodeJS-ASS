


function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [0.871570877817405, 0.9107447521970577, 0.743357509580703, 0.6571292972456975];

const result = getRandomItem(array);
console.log(result);