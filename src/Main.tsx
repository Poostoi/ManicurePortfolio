import "./App.css";
import { Info } from "./Info";
import { Portfolio } from "./Potfolio";
import { Services } from "./Services";
export const Main = () => {
  return (
    <>
      <div className="img"></div>
      <Services />
      <Info />
      <Portfolio />
    </>
  );
};
