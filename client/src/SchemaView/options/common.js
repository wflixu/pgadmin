

import _ from 'lodash';
import { evalFunc } from '../../utils';


export const FIELD_OPTIONS = '__fieldOptions';

export const booleanEvaluator = ({
  schema, field, option, value, viewHelperProps, options, defaultVal,
}) => (
  _.isUndefined(field?.[option]) ? defaultVal : 
    Boolean(evalFunc(schema, field[option], value, viewHelperProps, options))
);

export const evalIfNotDisabled = ({ options, ...params }) => (
  !options.disabled &&
  booleanEvaluator({ options, ...params })
);

export const canAddOrDelete = ({
  options, viewHelperProps, field, ...params
}) => (
  viewHelperProps?.mode != 'properties' &&
    !(field?.fixedRow) &&
    !options.disabled &&
    booleanEvaluator({ options, viewHelperProps, field, ...params })
);

export const evalInNonPropertyMode = ({ viewHelperProps, ...params }) => (
  viewHelperProps?.mode != 'properties' &&
  booleanEvaluator({ viewHelperProps, ...params })
);
