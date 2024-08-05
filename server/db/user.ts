import db from './connection';
import { User, UserData } from '../../models/user';

export async function getAllUsers(): Promise<User[]> {
  const users = await db('users').select();
  return users as User[];
}

export async function getUserById(id: number | string): Promise<User> {
  const user = await db('users').select().first().where({ id });
  return user as User;
}

export async function addUser(data: UserData): Promise<number> {
  const [id] = await db('users').insert(data);
  return id;
}