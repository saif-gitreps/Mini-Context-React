import React from "react";

const UserContext = React.createContext();

export default UserContext;

// so what this will do is which ever component is wrapped in the UserContext.Provider will have access to the value of the UserContext

// its like a global variable that can be accessed by any component that is wrapped in the UserContext.Provider

// example: <UserContext> <div> <h1>  </h1> </div> </UserContext>  <- anything inside the UserContext.Provider will have access to the value of the UserContext

// so if we have a value of "hello" in the UserContext.Provider then any component inside the UserContext.Provider will have access to the value of "hello."
