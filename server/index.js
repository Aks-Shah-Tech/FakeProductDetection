const app = require('./app');
const port = process.env.PORT || 4000;
const {connectDatabase} = require('./config/database');

connectDatabase();

app.listen(port, console.log(`Server on port ${port}`));