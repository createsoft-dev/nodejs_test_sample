import {app} from "../app.js";

const port: number = 3000;

app.listen(port, (): void => {
    console.log(`start listening on port ${port}`);
});