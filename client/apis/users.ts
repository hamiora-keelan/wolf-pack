import request from 'superagent';
import { User, UserData } from '../../models/user';

const rootUrl = '/api/users';

export function getUsers(): Promise<User[]> {
  return request.get(rootUrl).then((res) => {
    return res.body.users;
  });
}

export function getUserById(id: number | string): Promise<User> {
  return request.get(`${rootUrl}/${id}`).then((res) => {
    return res.body;
  });
}

export function addUser(data: UserData): Promise<number> {
  return request
    .post(rootUrl)
    .send(data)
    .set('Content-Type', 'application/json')
    .then((res) => {
      return res.body.id;
    });
}