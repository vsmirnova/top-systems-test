import { PropsWithChildren } from 'react';

const style = { display: 'flex' }; //todo тут это свойство нужно вынести в файл стилей, пока вынесла в константу, чтобы каждый раз не создавался новый объект

const PanelWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="panel-wrapper" style={style}>
      {children}
    </div>
  );
};

export default PanelWrapper;
