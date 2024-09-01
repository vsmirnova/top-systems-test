import { useEffect } from 'react';

import PanelWrapper from 'src/components/PanelWrapper';
import Users from 'src/components/Users';
import ThemeSwitcherBtn from 'src/components/ThemeSwitcherBtn';
import PanelLoader from 'src/components/PanelLoader/PanelLoader.tsx';
import RefreshBtn from 'src/components/RefreshBtn';

import { LoadingModeEnum } from 'src/types';
import { useUsers } from 'src/hooks/useUsers.ts';

// 1. Разбила файл и вынесла компоненты в отдельную папку components
// 2. Работу с темой и обработчик ошибок вынесла на уровень выше в контекст
// 3. В папку api перенесла логику получения данных
// 4. Все типы данных перенесла в папку types
// 5. В хук useUsers вынесла логику с получением данных, чтобы не перегружать компонент

export const UsersPage = () => {
  const { users, isLoading, loadingMode, setLoadingMode, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []); // в изначальном варианте в хук useEffect не передавался массив зависимостей, из-за этого он вызывался бы постоянно

  const handleOnRendered = () => {
    setLoadingMode(LoadingModeEnum.loaded);
  };

  return (
    <>
      <PanelWrapper>
        {/*При дальнейшем развитии проекта, можно подумать о создании общего компонента для этой панели, чтобы переиспользовать на других страницах*/}
        <ThemeSwitcherBtn />
        <PanelLoader isLoading={isLoading} loadingMode={loadingMode} title="Список зарегистрированных пользователей" />
        <RefreshBtn isLoading={isLoading} loadingMode={loadingMode} onClick={getUsers} />
      </PanelWrapper>
      <Users items={users} onRendered={handleOnRendered} />
    </>
  );
};
