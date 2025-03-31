import { Router } from 'express';
const router = Router();
import cors from 'cors';

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:8000' 
    })
);

router.post('')