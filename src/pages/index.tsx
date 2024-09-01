import { UsersPage } from 'src/pages/users';

import App from 'src/components/App';

import { ThemeProvider } from 'src/hooks/useTheme.tsx';
import { ErrorProvider } from 'src/hooks/useError';

const Main = () => {
  return (
    <App>
      <ThemeProvider>
        <ErrorProvider>
          <UsersPage /> {/*тут в будущем можно добавить роутер */}
        </ErrorProvider>
      </ThemeProvider>
    </App>
  );
};

export default Main;
