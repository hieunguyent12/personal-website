import { useEffect, useState} from "preact/hooks";

export default function ThemeToggle() {
 const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

 const handleClick = () => {
   setTheme(theme === "light" ? "dark" : "light");
 };

 useEffect(() => {
   if (theme === "dark") {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
   localStorage.setItem("theme", theme);
 }, [theme]);

 return (
  <div  onClick={handleClick} class="flex items-center justify-center w-10 h-10 rounded-full p-2 hover:bg-slate-200 hover:dark:bg-[#5c6269] hover:cursor-pointer">
       <button>{theme === "dark" ? "🌙" : "🌞"}</button>
  </div>
 );
}