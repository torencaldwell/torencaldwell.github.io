import _ from 'lodash';
import { english } from './en';

export const strings = key => _.get(english, key, undefined);