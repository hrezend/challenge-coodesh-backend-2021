import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.get('*', function(req, res){
    res.status(404).send('what???');
});

export { app }