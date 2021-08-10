import * as React from 'react';

export type UseData = Partial<{
  data: any;
  loading: boolean;
  error: string;
}>;

export type UseReturn = {
  data: any;
  getData?: UseData;
};

export type ProviderProps = {
  children: React.ReactNode;
} & UseReturn;
