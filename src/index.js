module.exports = function toReadable (number) {

    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let newArr = [];

    let arr = number.toString().split('');

    let countNumber = arr.length;
    for(let i = 0; i < countNumber; i++) {
        if(arr.length === 3) {
            newArr.push(units[arr[0]] + ' hundred');
            arr.shift();
        } else if (arr.length === 2) {
            if (arr[0] === '1') {
                newArr.push(dozen[arr[1]]);
                break;
            } else if (arr[0] === '0') {
                arr.shift();
            } else {
                newArr.push(dozens[arr[0]]);
                arr.shift();
            }

        } else if (arr.length === 1) {
            if(arr[0] === '0' && countNumber > 1) {
                newArr.push();
            } else {
                newArr.push(units[arr[0]]);
            }
        }
    }
    return newArr.join(' ').trim();
}
