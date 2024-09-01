import { PropsWithChildren } from 'react';

const App = ({ children }: PropsWithChildren) => {
  return <>{children}</>; /*тут какая-то логика отображения HOC контейнера. Не требует реализации.*/
};

export default App;
