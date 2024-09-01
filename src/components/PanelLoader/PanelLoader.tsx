import { LoadingModeEnum } from 'src/types';

interface IProps {
  isLoading: boolean;
  loadingMode?: LoadingModeEnum;
  title: string;
}

const PanelLoader = ({}: IProps) => {
  return (
    <>
      {/*Тут какая-то логика отображения панели загрузки. Предположим, в правом углу крутится колесо в момент лоадинга. Не требует реализации.*/}
    </>
  );
};

export default PanelLoader;
