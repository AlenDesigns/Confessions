import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

export const app = express();

app.use(helmet());

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.route('/confession').get().post();

app.route('/confession/:id').get().put().delete();
export const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`REST API listening on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};
