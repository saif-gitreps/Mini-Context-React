import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";
import "./App.css";

function App() {
   return (
      <UserContextProvider>
         <Login />
         <Profile />
      </UserContextProvider>
   );
}

export default App;
