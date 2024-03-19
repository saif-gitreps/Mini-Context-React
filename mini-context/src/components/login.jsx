import React, { useState, useContext } from "react";

import UserContext from "../context/user-context";

// usecontext helps us to fetch data from UserContext.

export default function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   // this setUser comes from UserContextProvider.
   const { setUser } = useContext(UserContext);

   //so in the grand scheme of things this basically means setting data in a global varialbe.
   const handleSubmit = (e) => {
      e.preventDefault();
      setUser({ username, password });
   };

   return (
      <div>
         <h1>Login</h1>
         <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
               setUsername(e.target.value);
            }}
         />
         <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
               setPassword(e.target.value);
            }}
         />
         <button onClick={handleSubmit}>Login</button>
      </div>
   );
}
