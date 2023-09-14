import { useAppSelector } from './hooks';
import { getPageData } from './store/page-process/selectors';
import { getUserName } from './store/user-process/selectors';

function App() {
  const { user } = useAppSelector(getUserName);
  const { photos, year } = useAppSelector(getPageData);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Мой топ фото</h1>
      </header>
      <p className='App-intro'>Здесь будут мои самые залайканные фото</p>
      <p>Привет из App, {user}</p>
      <p>
        У тебя {photos.length} фото за {year} год
      </p>
    </div>
  );
}

export default App;
