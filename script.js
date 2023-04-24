function pow(num, degree){
    if (degree === 0){
        return 1;
    }
    if (degree === 1){
        return num;
    }
    if (degree < 0){
        return 1 / pow(num, -degree);
    }
    return num * pow(num, degree - 1);
}
let result = pow(2, 5);
console.log(result)
