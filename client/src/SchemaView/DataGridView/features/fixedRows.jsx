

import { useContext, useEffect } from 'react';

import { useIsMounted } from '../../../custom_hooks';
import { SchemaStateContext } from '../../SchemaState';
import Feature from './feature';


export default class FixedRows extends Feature {

  onTable() {
    const instance = this;
    const schemaState = useContext(SchemaStateContext);
    const checkIsMounted = useIsMounted();

    useEffect(() => {
      let rowsPromise = instance.field.fixedRows;

      // Fixed rows is supported only in 'create' mode.
      if (instance.viewHelperProps.mode !== 'create') return;

      // If fixedRows is defined, fetch the details.
      if(typeof rowsPromise === 'function') {
        rowsPromise = rowsPromise();
      }

      if(rowsPromise) {
        Promise.resolve(rowsPromise)
          .then((res) => {
            // If component is unmounted, don't update state.
            if(checkIsMounted()) {
              schemaState.setUnpreparedData(instance.accessPath, res);
            }
          });
      }
    }, []);
  }
}
