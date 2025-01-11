// let use the js functions..

// non perameterised functions..
function dekho() {
    let sum = 0;
    let mult = 1;
    const a = [1,2,3,4,5,6,7,8,9,10];

    for(let i = 0; i < a.length; i++) {
        sum+=a[i];
        mult *= a[i];
    }
    console.log(sum);
    console.log(mult);
}

// dekho();

// perameterised functions...


function kuddos (number) {
    // print the digit sun
    let sum = 0;
    while(number != 0) {
        var dig = number % 10;
        sum += dig;
        number = Math.floor(number / 10);
    }
    console.log(sum);
}

kuddos(22762746);