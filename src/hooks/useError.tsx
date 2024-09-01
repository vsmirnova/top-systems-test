import { createContext, Dispatch, PropsWithChildren, useContext, useState } from 'react';

type ErrorMessageType = string | null;

type ErrorContextType = {
  setErrorMessage: Dispatch<ErrorMessageType>;
};

const ErrorContext = createContext({} as ErrorContextType);

export const ErrorProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState<ErrorMessageType>(null);

  const value = {
    setErrorMessage: setMessage,
  };

  return <ErrorContext.Provider value={value}>{message ? <p>{message}</p> : children}</ErrorContext.Provider>;
};
export const useError = () => useContext(ErrorContext);
