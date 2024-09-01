import React, { useEffect, useState } from 'react'

export const UsersPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [mode, setMode] = useState('loading');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    //@ts-ignore
    API.getUsers().then(setUsers)
  })

  const getUsers = async () => {
    const users = await API.getUsers();
    //@ts-ignore
    setUsers(users);
  }

  const setLoadingMode = () => {
    setMode("loaded");
  }

  return (<>
    <App>
      <ErrorWrapper errorMessage={errorMessage}>
        <div className='panel-wrapper' style={{ display: 'flex' }}>
          <ThemeSwitcherBtn mode={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)} />
          <Panel mode={mode} title="Список зарегистрированных пользователей" />
          <RefreshBtn mode={mode} onClick={getUsers} />
        </div>
        <Users users={users} postRenderedCallback={setLoadingMode} />
      </ErrorWrapper>
    </App>
  </>)
}

export const App = ({ children }: React.PropsWithChildren) => (<>
  {/*тут какая-то логика отображения HOC контейнера. Не требует реализации.*/}
</>)
export const Users = (props: { users: Array<{ id: number, name: string }>, postRenderedCallback: () => void }) => (<>
  {/*Тут какая-то логика отображения пользователе. Не требует реализации.й*/}
</>)
export const Panel = ({ mode, title }: { mode: string, title: string }) => (<>
  {/*Тут какая-то логика отображения панели загрузки. Предположим, в правом углу крутится колесо в момент лоадинга. Не требует реализации.*/}
</>)
export const RefreshBtn = ({ mode, onClick }: { mode: string, onClick: () => Promise<void> }) => (<>
  {/*Тут какая-то логика отображения кнопки релоада. Не требует реализации.*/}
</>)
export const ThemeSwitcherBtn = ({ mode, onClick }: { mode: boolean, onClick: () => void }) => (<>
  {/*Тут какая-то логика отображения кнопки смены темы. Не требует реализации.*/}
</>)
export const ErrorWrapper = ({ errorMessage, children }: React.PropsWithChildren<{ errorMessage: string | null | undefined }>) => (<>
  {errorMessage
    ? <p>{errorMessage}</p>
    : children
  }</>)

export const API = {
  async getUsers(): Promise<Array<{ id: number, name: string }>> {
    // Условимся, что тут идет запрос на сервер. Сервер может вернуть как список пользователей, так и ошибку.
    if (Math.random() > 0.5) {
      return Promise.reject('some error');
    } else {
      return Promise.resolve([{ id: 1, name: 'user1' }, { id: 2, name: 'user2' }, { id: 3, name: 'user3' }]);
    }
  }
}