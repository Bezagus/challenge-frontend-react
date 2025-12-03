import { useSelector } from 'react-redux';
import HomeScreen from '@screens/HomeScreen/HomeScreen.jsx';

const App = () => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <HomeScreen />
    </div>
  );
};

export default App;
