import themes from '../themes';
import {GlobalValues} from './types';
import {useColorScheme} from 'react-native';
import React, {createContext, useEffect, useReducer, useState} from 'react';

const globalValues: GlobalValues = {
  theme: themes.dark,
  isAuth: true,
};
type actionTypes = {
  type: 'UPDATE_THEME' | 'UPDATE_IS_AUTH';
  payload: any;
};
type contexDefaultValueTypes = {
  values: GlobalValues;
  dispatch: React.Dispatch<actionTypes>;
};
const contexDefaultValues = {
  values: globalValues,
  dispatch: () => null,
};

const globalReducer = (state: GlobalValues, action: actionTypes) => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return {...state, theme: action.payload};
    case 'UPDATE_IS_AUTH':
      return {...state, isAuth: action.payload};
    default:
      return state;
  }
};
const AppContext = createContext<contexDefaultValueTypes>(contexDefaultValues);

const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const colorScheme = useColorScheme();

  const [values, dispatch] = useReducer(globalReducer, globalValues);

  useEffect(() => {
    const theme = colorScheme === 'dark' ? themes.dark : themes.light;
  }, [colorScheme]);

  return (
    <AppContext.Provider value={{values, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
