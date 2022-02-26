const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// configure routes
const routes = require('./api/routes');

routes.init(app);

app.listen(3444, () => { console.log('server is running on port 3444'); });
