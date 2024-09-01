import { useTheme } from 'src/hooks/useTheme.tsx';

const ThemeSwitcherBtn = () => {
  const { isDarkTheme, onChangeTheme } = useTheme();
  return <>{/*Тут какая-то логика отображения кнопки смены темы. Не требует реализации.*/}</>;
};

export default ThemeSwitcherBtn;
