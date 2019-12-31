function countNumbers(a) {
    let numbers = '';
    //let count = {};
    for (let i = 0; i <= a.length; i++) {
        if(!isNaN(a[i])) {
            numbers = `${numbers}${a[i]}`;

        }
    }
    return numbers;
}
countNumbers('aksdjfg8765nkejrgn034953lkdgfnakj0');