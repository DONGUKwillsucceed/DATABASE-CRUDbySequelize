import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import mypageRoute from './routes/mypageRoute.js';
import { sequelize } from './db/mysql.js';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());


app.use('/mypage', mypageRoute);

app.use((req, res, next)=>{
    res.sendStatus(404);
})

app.use((error, req, res, next)=>{
    res.sendStatus(500);
})
sequelize.sync().then(client =>{
    //console.log(client);
    app.listen(3000, ()=>{
        console.log('success!!');
    })
})
//db.getConnection().then(console.log('connect!'));
