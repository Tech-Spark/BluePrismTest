import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/BluePrism', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/', (req, res )=> {
    res.send('Server is ready');
});


app.use('/api', userRouter);

// to display error message in the forntend
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

if(process.env.NODE_ENV === 'production'){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    //wild card route
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
      });
}
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

