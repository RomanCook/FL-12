let a,b,c,TriangleType;
a = +prompt('Please enter lenghf 1-st side of triangle',0);
if (a === null || isNaN(a)) {
    alert('input values should be ONLY numbers');
    } else {
        if (a < 0) {
            alert('A triangle must have 3 sides with a positive definite length');
        }
    }
b = +prompt('Please enter lenghf 2-nd side of triangle',0);
if (b === null || isNaN(b)) {
    alert('input values should be ONLY numbers');
    } else {
        if (b < 0) {
            alert('A triangle must have 3 sides with a positive definite length');
        }
    }
c = +prompt('Please enter lenghf 3-rd side of triangle',0);
if (c === null || isNaN(c)) {
    alert('input values should be ONLY numbers');
    } else {
        if (c < 0) {
            alert('A triangle must have 3 sides with a positive definite length');
        }
    }
        if (a + b <= c || b + c <= a || a + c <= b){
            TriangleType = "Triangle doesn't exist";
        } else {
             if (a === b && b === c && c === a){
                TriangleType = 'Equilateral triangle';
            } else {
                if(a === b || b === c || c === a){
                    TriangleType = 'Isosceles triangle';
                } else {
                    TriangleType = 'Scalene triangle';
                }
            }
        }
    console.log(TriangleType);