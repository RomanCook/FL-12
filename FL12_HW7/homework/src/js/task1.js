let login, passwd;
let loginLenght = 5;
login = prompt('Enter your Email');
if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < loginLenght) {
    alert('I d\'ont know any emails having name length less than 5 symbols');
} else if (login === 'user@gmail.com' || login === 'admin@gmail.com') {
    passwd = prompt('Enter your password');
    if (passwd === '' || passwd === null) {
        alert('Canceled');
    } else if (passwd === 'UserPass' && login === 'user@gmail.com' ||
    passwd === 'AdminPass' && login === 'admin@gmail.com') {
        alert('hello2');
        let changePasswd = confirm('Do you want to change your password?');
        if (changePasswd) {
            alert('hello3');
            let oldPasswd = prompt('Enter your old password');
            if (oldPasswd === passwd) {
                alert('hello4');
                let newPasswd = prompt('Enter new password');
                let newPasswdLenght = 6;
                if (newPasswd === '' || newPasswd === null) {
                    alert('Canceled');
                } else if (newPasswd.length < newPasswdLenght) {
                    alert('It\'s to short password. Sorry.');
                } else {
                    let reenterNewPasswd = prompt('Enter new password again');
                    if (reenterNewPasswd === newPasswd) {
                        alert('You have successfully changed your password');
                    } else{
                        alert('You wrote the wrong password');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password.');
    }
} else {
    alert('I don\'t know you');
}