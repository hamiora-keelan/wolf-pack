import { useState, useEffect } from 'react';
import { getUsers, getUserById, addUser as addUserApi } from '../apis/users';
import { User, UserData } from '../../models/user';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};


export const useUser = (id: number | string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(id);
        setUser(user);
      } catch (err) {
        setError('Error fetching user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
};

export const useAddUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addUser = async (user: UserData) => {
    setLoading(true);
    try {
      const id = await addUserApi(user);
      return id; 
    } catch (err) {
      setError('Error adding user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading, error };
};