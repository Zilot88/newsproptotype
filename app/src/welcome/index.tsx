import React from "react";
import * as S from "./styles";
import { Provider, useContext, NewsTest } from "news-independent";

type Item = {
  title: string;
  description: string;
  slugs: string[];
};

const items: Item[] = [
  {
    title: 'AutoUnregister',
    description: 'Should keep all inputs data when inputs get unmounted',
    slugs: ['/autoUnregister'],
  },
];

const Temp2 = () => {
  const { data } = useContext();
  console.log(data);
  return (
    <div>
      <NewsTest/>
      {JSON.stringify(data)}
    </div>
  );
}

const Component: React.FC = () => {
  return (
    <div style={S.page}>
      <Provider data={{test: 'test'}} >
        <span>
        <Temp2/>
        </span>
      </Provider>
    </div>
  );
};

export default Component;
