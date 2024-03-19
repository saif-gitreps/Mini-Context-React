import { useState } from "react";
import UserContext from "./user-context";

// so what this will do is which ever component is wrapped in the UserContext.Provider will have access to the value of the UserContext

export default function UserContextProvider({ children }) {
   const [user, setUser] = useState(null);

   return (
      <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
   );
}
