import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());
app.use(router);
app.get('*', function(req, res){
    res.status(404).send('what??? this route does not exists...');
});

export { app }