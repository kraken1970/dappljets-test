import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.scss';
import classNames from 'classnames';
import Header from './components/Header/Header';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div className={classNames('container', styles.appContainer)}>
      <header>
        <Header />
      </header>

      <aside>
        <LeftSide />
      </aside>

      <HomePage />
      <aside>
        <RightSide />
      </aside>
    </div>
  );
};

export default App;
