import "./App.css";
import { Card } from "./Card";
export const Main = () => {
  return (
    <>
      <div className="img"></div>
      <div className="text-center 	 ">
        <h1 className="price">Услуги</h1>
        <div className="col-12 row justify-content-around ">
          <div className="col-lg-2 col-md-3 col-sm-8 col-xs-9 mb-sm-4 mb-4 bg-dark rounded text-white">
            <Card header="Пиллинг" text="asdasdas" price={400} />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-8 col-xs-9 mb-sm-4 mb-xs-5 bg-dark rounded text-white">
            <Card header="Пиллинг" text="asdasdas" price={400} />
          </div>
          <div className="col-lg-2 col-md-3 col-sm-8 col-xs-9 mb-sm-4 mb-xs-5 bg-dark rounded text-white">
            <Card header="Пиллинг" text="asdasdas" price={400} />
          </div>
        </div>
      </div>
    </>
  );
};
