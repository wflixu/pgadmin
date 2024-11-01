

import React from 'react';

import PropTypes from 'prop-types';

import ErrorBoundary from '../helpers/ErrorBoundary';

import SchemaDialogView from './SchemaDialogView';
import SchemaPropertiesView from './SchemaPropertiesView';
import { registerView } from './registry';


export default function SchemaView({formType, ...props}) {
  /* Switch the view based on formType */
  return (
    <ErrorBoundary>
      {
        formType === 'tab' ?
          <SchemaPropertiesView {...props}/> : <SchemaDialogView {...props}/>
      }
    </ErrorBoundary>
  );
}

SchemaView.propTypes = {
  formType: PropTypes.oneOf(['tab', 'dialog']),
};

registerView(SchemaView, 'SchemaView');
