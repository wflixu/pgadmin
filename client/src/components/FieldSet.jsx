import { styled } from '@mui/material/styles';
import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../shared/custom_prop_types';

const StyledFieldset = styled('fieldset')(({theme}) => ({
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'inherit',
  border: '1px solid ' + theme.otherVars.borderColor,
  '& .FieldSet-legend': {
    width: 'unset',
    fontSize: 'inherit',
    fontWeight: 'bold',
  }
}));

export default function FieldSet({title='', className, children}) {

  return (
    <StyledFieldset className={className}>
      <legend className='FieldSet-legend'>{title}</legend>
      {children}
    </StyledFieldset>
  );
}

FieldSet.propTypes = {
  title: PropTypes.string,
  className: CustomPropTypes.className,
  children: CustomPropTypes.children,
};
