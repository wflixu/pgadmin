

import React, { useContext, useEffect, useState, useMemo } from 'react';

import Loader from '../components/Loader';

import { SchemaStateContext } from './SchemaState';


export const FormLoader = () => {
  const [key, setKey] = useState(0);
  const schemaState = useContext(SchemaStateContext);
  const message = schemaState.loadingMessage;

  useEffect(() => {
    // Refresh on message changes.
    return schemaState.subscribe(
      ['message'], () => setKey(Date.now()), 'states'
    );
  }, [key]);

  return useMemo(() => <Loader message={message}/>, [message, key]);
};
