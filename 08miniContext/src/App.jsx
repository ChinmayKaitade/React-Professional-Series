import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai | Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
