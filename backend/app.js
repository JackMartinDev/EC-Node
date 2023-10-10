import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'

import express from "express"
import cors from "cors"

import errorController from './controllers/error.js'

const app = express();

app.use(cors());
app.use(express.json());

//End point logging
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController);

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
});
