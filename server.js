const app = require('./config/express.js')();
const port = app.get('port')


app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});