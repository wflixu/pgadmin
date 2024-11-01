
import React from 'react';
import PropTypes from 'prop-types';

import { InputText } from './FormComponents';
import gettext from '../gettext';


export const SEARCH_INPUT_SIZE = {
  FULL: 'full',
  HALF: 'half',
};

export const SEARCH_INPUT_ALIGNMENT = {
  LEFT: 'left',
  RIGHT: 'right'
};

export const SearchInputText = ({
  searchText, onChange, placeholder, size, alignment
}) => {
  const props = {
    placeholder: placeholder || gettext('Search'),
    style: {
      width: size == SEARCH_INPUT_SIZE.FULL ? '100%' : '50%',
    },
    value: searchText,
    onChange,
  };
  if (alignment == SEARCH_INPUT_ALIGNMENT.RIGHT)
    props.style['marginLeft'] = 'auto';
  else
    props.style['marginRight'] = 'auto';

  return <InputText {...props}/>;
};

SearchInputText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SEARCH_INPUT_SIZE)),
  alignment: PropTypes.oneOf(Object.values(SEARCH_INPUT_ALIGNMENT)),
  style: PropTypes.object,
};
