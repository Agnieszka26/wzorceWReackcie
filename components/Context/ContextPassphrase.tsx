import React, { createContext, Dispatch, SetStateAction } from 'react';
interface IContextPassphrase {
  isUserSetCorrectPassphrase: boolean;
  setIsUserSetCorrectPassphrase: Dispatch<SetStateAction<boolean>>;
}
export const ContextList = createContext<IContextPassphrase>({
  isUserSetCorrectPassphrase: false,
  setIsUserSetCorrectPassphrase: () => {},
});

export const ContextProvider = ({ children }: any) => {
  const [isUserSetCorrectPassphrase, setIsUserSetCorrectPassphrase] =
    React.useState<boolean>(false);

  const values = {
    isUserSetCorrectPassphrase,
    setIsUserSetCorrectPassphrase,
  };
  return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
};
