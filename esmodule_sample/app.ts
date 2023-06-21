import express, {Router, type Request, type Response} from 'express';
import Redis from 'ioredis';

const app: express.Application = express();

const router: Router = Router();

const redis: Redis = new Redis();
app.set('redis', redis);

router.get('/', (req: Request, res: Response): void => {
    res.send('hello world');
});

router.get('/count', (req: Request<any, any, { reset?: 'yes' }>, res: Response<string>): void => {

    const redis = req.app.locals.settings.redis;

    if (req.query.reset === 'yes') {
        redis.set('count', 0).then((): void => {
            res.send(`${0}`);
        });
    } else {
        redis.incr('count').then((count: number): void => {
            res.send(`${count}`);
        });
    }
});

app.use(router);

export {app}