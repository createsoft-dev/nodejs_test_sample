import express, {Router, type Request, type Response} from 'express';

const app: express.Application = express();

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
    res.send('hello world');
});

app.use(router);

export {app}