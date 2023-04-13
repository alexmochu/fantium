import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

import Fantium from './fantium';

export function App() {
const [data, setData] = useState('data')
  const getFetchUrl = useCallback(
    () =>
      `http://localhost:3333/`,
    []
  );

  useEffect(
    () => {
      async function fetchData() {
        const result = await axios(getFetchUrl());
        setData(
          result.data.message
        );
      }

      fetchData();
    },

    [getFetchUrl]
  );

  return (
    <Fantium title={data} />
  );
}

export default App;
