import { useState } from 'react';

import { LoadingModeEnum, UserType } from 'src/types';
import { getUsersApi } from 'src/api';
import { useError } from 'src/hooks/useError.tsx';

export const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  //с состоянием загрузки не хватает подробностей для принятия решений, поэтому предложу два варианта:
  //1. более логичным, мне кажется использовать isLoading: boolean, менять его состояние в момент начала загрузки данных и в конце
  //2. отказаться от loadingMode не позволило непонимание смысла функции postRenderedCallback в компоненте Users,
  // если она несет какую-то смысловую нагрузку, то можно убрать состояние isLoading, если нет - убрать состояние loadingMode

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMode, setLoadingMode] = useState<LoadingModeEnum>(LoadingModeEnum.loading);

  const { setErrorMessage } = useError();

  const getUsers = () => {
    setIsLoading(true);
    setLoadingMode(LoadingModeEnum.loading);
    getUsersApi()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        setErrorMessage(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, users, loadingMode, setLoadingMode, getUsers };
};
