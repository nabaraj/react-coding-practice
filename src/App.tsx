// import { useCallback, useRef, useState } from "react";
import "./App.css";
// import { Accordion } from "./components/accordion/Accordion";
import { PokeMon, PokeMonDetails } from "./components/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Game } from "./components/tictactoe";
import { TraficLights } from "./components/trafic-lights";
import { Weather, StopWatch, ChartComponent } from "./components";
import { Accordion } from "./components/accordion/Accordion";

// const TestComponent = () => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(count);

//   const increment = useCallback(() => {
//     countRef.current = countRef.current + 1;
//     setCount(countRef.current);
//   }, []);

//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <p>Count: {count}</p>
//     </div>
//   );
// };
const NotFound = () => {
  return <div>not found</div>;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <PokeMon />
  },
  {
    path: "/pokemon/:id",
    element: <PokeMonDetails />
  },
  { path: "*", element: <NotFound /> }
]);

function App() {
  return (
    <>
      <TraficLights />
      <header>
        <StopWatch />
      </header>
      <div className='content'>
        <Weather />
      </div>
      {/* <TestComponent /> */}
      <ChartComponent /> <Game /> <Accordion />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
