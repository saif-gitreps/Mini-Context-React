import { createContext, useContext } from "react";

// step : 1 we created a context
// it is optional to provide a default value to the context
export const ThemeContext = createContext({
   themeMode: "light",
   darkTheme: () => {},
   lightTheme: () => {},
});

// step : 2 we created a provider, what this does is it provides the value to the children
// this is a wrapper component that wraps the children and provides the value to the children
export const ThemeProvider = ThemeContext.Provider;

// step : 3 we created a custom hook to use the context
// this is a custom hook that we can use to consume the context
// this hook will return the value of the context
// we are doing this because we don't want to import the useContext and the provider in every component

export default function useTheme() {
   return useContext(ThemeContext);
}
