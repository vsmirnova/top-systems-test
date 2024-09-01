import { LoadingModeEnum } from 'src/types';

interface IProps {
  isLoading: boolean;
  loadingMode?: LoadingModeEnum;
  onClick: () => void;
}

const RefreshBtn = ({}: IProps) => {
  return <>{/*Тут какая-то логика отображения кнопки релоада. Не требует реализации.*/}</>;
};

export default RefreshBtn;
