import { createContext, ReactElement, ReactNode, useState } from 'react';

interface BlockContextData {
  setContextData: (data: any) => void;
  contextData: any;
}

interface BlockContextProps {
  children: ReactNode;
}

export const BlockContext = createContext<BlockContextData>({
  contextData: null,
  setContextData: () => {},
});

export const BlockContextProvider = ({ children }: BlockContextProps): ReactElement => {
  const [state, setState] = useState({
    contextData: {},
    setContextData: (data: any) => {
      setState({
        ...state,
        contextData: {
          ...data,
        },
      });
    },
  });

  return <BlockContext.Provider value={state}>{children}</BlockContext.Provider>;
};
