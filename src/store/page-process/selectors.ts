import { NameSpace, TPage } from '../../constants';
import { RootState } from '../state';

export const getPageData = (state: Pick<RootState, NameSpace.Page>): TPage => state.PAGE;
