import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
   const [themeMode, setThemeMode] = useState("light");

   const lightTheme = () => {
      setThemeMode("light");
   };

   const darkTheme = () => {
      setThemeMode("dark");
   };

   // actual change in theme

   /*
      we are adding class to the html because we want to change the theme of the whole page
      and this is done by adding the class to the html tag
      which will change the theme of the whole page by changing the css of the page
      we are using the useEffect to change the theme of the page
      whenever the themeMode changes
      we are removing the light and dark class from the html tag
      and adding the themeMode class to the html tag
      but why on the html element ? And how does it know to change the theme of the whole page ?
      When you add the dark class to the HTML tag, Tailwind CSS interprets it the same way as adding it to the body tag. The presence of the dark class on either the HTML tag or the body tag indicates that dark mode is active, and Tailwind CSS applies dark mode styles defined with the dark: prefix throughout your application.
   */
   useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark");
      document.querySelector("html").classList.add(themeMode);
   }, [themeMode]);

   return (
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
         <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
               </div>

               <div className="w-full max-w-sm mx-auto">
                  <Card />
               </div>
            </div>
         </div>
      </ThemeProvider>
   );
}

export default App;
