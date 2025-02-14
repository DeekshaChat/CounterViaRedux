import { useSelector } from "react-redux";
import Counter from "./components/Counter/Counter";
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import Auth from './components/Auth/Auth';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn && <Header />}
      {!isLoggedIn ?
        <Auth/>
        : 
        <>
          <UserProfile />
          <Counter />
        </>
      } 
    </>
  );
}

export default App;