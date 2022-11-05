function makePhonenum(num) {
    let format = "(xxx) xxx-xxxx";

    for (let i = 0; i < num.length; i++) {
        format = format.replace('x', num[i])
    }

    return format;
}

console.log(makePhonenum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))