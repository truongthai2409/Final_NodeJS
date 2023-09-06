const newRouter = require('./Site.js');
const newLogin = require('./Login.js');
const newRegister = require('./Register.js');

function route(app) {
        
    app.get('/register', newRegister);

    app.use('/login', newLogin);

    app.use('/', newRouter);
}

module.exports = route;