function sumNumber() {

    const arr = [20, '234', 'car', 41, 20, 'chair'];
    const arrNum = arr.filter(item => typeof item === 'number');

    let sum = 0;

    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
    }
    console.log(sum);