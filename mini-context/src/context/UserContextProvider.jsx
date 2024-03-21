import { useState } from "react";
import UserContext from "./UserContext";

// so what this will do is which ever component is wrapped in the UserContext.Provider will have access to the value of the UserContext

// we need to make a an angled bracket component that will take in a value and then wrap the children in it.

function UserContextProvider({ children }) {
   const [user, setUser] = useState(null);

   return (
      <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
   );
}

export default UserContextProvider;
