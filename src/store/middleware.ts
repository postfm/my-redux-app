import { Middleware } from 'redux';
import { rootReducer } from './root-reducers';

type Reducer = ReturnType<typeof rootReducer>;

export const ping: Middleware<unknown, Reducer> = () => (next) => (action) => {
  console.log(`Тип события ${action.type}, дополнительные данные события: ${action.payload}`);

  return next(action);
};
