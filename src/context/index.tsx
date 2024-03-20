import themes from '../themes';
import {GlobalValues} from './types';
import {useColorScheme} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';

const globalValues: GlobalValues = {
  theme: themes.dark,
};

const AppContext = createContext<GlobalValues>(globalValues);

const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const colorScheme = useColorScheme();

  const [values, setValues] = useState<GlobalValues>(globalValues);

  const updateValues = (updatedValue: Partial<GlobalValues>) => {
    setValues(prevState => ({...prevState, ...updatedValue}));
  };

  useEffect(() => {
    const theme = colorScheme === 'dark' ? themes.dark : themes.light;
    const temp = {theme: theme};

    updateValues(temp);
  }, [colorScheme]);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export {AppContext, AppProvider};
