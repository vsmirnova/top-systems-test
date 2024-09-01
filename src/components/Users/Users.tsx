import { UserType } from 'src/types';

interface IProps {
  items: UserType[];
  onRendered: () => void;
}

const Users = ({}: IProps) => {
  return <>{/*Тут какая-то логика отображения пользователе. Не требует реализации.й*/}</>;
};

export default Users;
