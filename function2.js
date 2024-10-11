//Bai 1
function pow2 (num){
    return num * num;
}

//Bai 2
const pi = 3.14;
function circleArea(radius){
    return pi * radius * radius;
}
function circleCircumference(radius){
    return pi * 2 * radius;
}

//Bai 3
function powAny(num, power){
    let temp = num;
    for (let i = 2; i <= power; i++){
        temp*=num;
    }
    return temp;
}

//Bai 4
function isNumber(num) {
    num = parseFloat(num);
    return typeof num === 'number' && isFinite(num);
}

//Bai 5
function findMin(num1, num2, num3){
    let min = num1;
    if(min > num2) min = num2;
    if(min > num3) min = num3;
    return min;
}

//Bai 6
function isPositive(num){
    return (num > 0) ? true : false;
}

//Bai 7
function swap(num1, num2){
    return [num2, num1];
}

//Bai 8
function reverseArray(arr){
    let temp = [];
    for (let i in arr){
        temp.push(arr[length-i-1]);
    }
    return temp;
}

//Bai 9
function availability(arr, char){
    let count = 0;
    let copy = arr;
    let index = copy.indexOf(char);
    while (index != -1) {
        count++;
        copy.splice(index, 1);
        index = copy.indexOf(char);
    }
    return (count) ? count : -1;
}