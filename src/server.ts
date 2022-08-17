
import cors from 'cors';
import express from 'express';
import { prisma } from '../prisma';
import { getFilesDrive } from './providers/google/drive';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3000, async () => {
    await prisma.$connect()
    console.log(`Control started 🚀 `);
    await getFilesDrive().catch((err) => {console.log(err);});
  }
);