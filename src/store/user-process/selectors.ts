import { NameSpace, User } from '../../constants';
import { RootState } from '../state';

export const getUserName = (state: Pick<RootState, NameSpace.User>): User => state.USER;
