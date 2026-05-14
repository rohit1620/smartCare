import express from 'express';
import { registerUser, loginUser, getMyProfile, logoutUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', getMyProfile);
router.post('/logout', logoutUser); 
export default router;