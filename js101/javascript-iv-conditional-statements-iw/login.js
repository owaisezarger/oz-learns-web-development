// Given stored username and password and input username and password, Print if the user can login or not.

function login(username,password) {
    if (username === 'admin' && password === '123456') {
        console.log('Login successful');
    } else {
        console.log('Login failed');
    }
}

login('admin','123456');
login('admin','1234');