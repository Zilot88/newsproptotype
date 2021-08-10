import * as React from 'react';

import omit from './utils/omit';
import { ProviderProps, UseReturn } from './types';

const Context = React.createContext<UseReturn | null>(null);

Context.displayName = 'NewsContext';

export const useContext = (): UseReturn =>
  React.useContext(Context) as unknown as UseReturn;

export const Provider = (props: ProviderProps) => (
  <Context.Provider value={omit(props, 'children') as unknown as UseReturn}>
    {props.children}
  </Context.Provider>
);
