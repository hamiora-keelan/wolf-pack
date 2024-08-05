import { Router } from 'express';
import checkJwt, {JwtRequest } from '../auth0';
import { StatusCodes } from 'http-status-codes';
import * as db from '../db/user';
import { UserData } from '../../models/user';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers();
    res.json({ users: users.map((user) => user.name) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await db.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
    return;
  }

  try {
    const userData: UserData = req.body;
    const id = await db.addUser(userData);
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED);
  } catch (err) {
    next(err);
  }
});

export default router;