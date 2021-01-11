import _ from 'lodash';
import { linksList } from './links';

export const links = key => _.get(linksList, key, undefined);