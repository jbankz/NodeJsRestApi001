import express from 'express';
import { createUser, getUsers, getSingleUser, deleteAuser, updateAuser } from '../controllers/users.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.delete('/:id', deleteAuser);
router.patch('/:id', updateAuser);

export default router;