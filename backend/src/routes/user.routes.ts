import { Router } from 'express';
import { createUserController,getAllUsers, deleteUserController } from '../controllers/user.controller';

const router = Router();

router.post('/users', createUserController);
router.get('/getAll/', getAllUsers);

router.delete('/users/:userId', deleteUserController);

export default router;
