import { UserType } from 'src/types';

const mockUsers: UserType[] = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
  { id: 3, name: 'user3' },
];

// Условимся, что тут идет запрос на сервер. Сервер может вернуть как список пользователей, так и ошибку.
export const getUsersApi = () => {
  return new Promise<UserType[]>(async (resolve, reject) => {
    // тут поправила функцию, чтобы она возвращала промис
    if (Math.random() > 0.5) {
      return reject('some error');
    } else {
      return resolve(mockUsers);
    }
  });
};
