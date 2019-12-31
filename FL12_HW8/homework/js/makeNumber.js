function makeNumber(a) {
    let numbers = '';
    for (let i = 0; i <= a.length; i++) {
        if(!isNaN(a[i])) {
            numbers = `${numbers}${a[i]}`; 
        }
    }
    return numbers;
}
makeNumber('aksdjfg8765nkejrgn034953lkdgfnakj0');