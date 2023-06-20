import express, {Router} from 'express';

const app = express();

const router = Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

app.use(router);

export {app}