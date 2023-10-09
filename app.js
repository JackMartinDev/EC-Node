import express from "express"

import bodyParser from "body-parser"

import errorController from './controllers/error.js'

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/Users/jackmartin/NodeJs/00-starting-setup/public'));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController);

app.listen(3000);
