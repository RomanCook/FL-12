let a, b, c, D, x, x1, x2;
let two = 2, four = 4;
a = prompt('Enter value of "a" for quadratic equation (ax^2 + bx + c = 0)');
b = prompt('Enter value of "b" for quadratic equation (ax^2 + bx + c = 0)');
c = prompt('Enter value of "c" for quadratic equation (ax^2 + bx + c = 0)');
D = b * b - four * a * c;
if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c) || a === null || b === null || c === null) {
    alert('Invalid input data');
} else if (D < 0) {
    alert('no solution');
} else if (D === 0) {
    x = Math.round(-b / two * a);
    alert(`x=${x}`);
} else {
    x1 = Math.round(-b + Math.sqrt(D)) / two * a;
    x2 = Math.round(-b - Math.sqrt(D)) / two * a;
    alert(`x1 = ${x1}\nx2 = ${x2}`);
}