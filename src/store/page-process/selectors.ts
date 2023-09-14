import { NameSpace, Page } from '../../constants';
import { RootState } from '../state';

export const getPageData = (state: Pick<RootState, NameSpace.Page>): Page => state.PAGE;
