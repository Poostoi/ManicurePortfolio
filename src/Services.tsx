import { Card } from "./Card";

export const Services = () => {
  return (
    <>
      <div id="services" className="text-center flex background pb-5 pt-5">
        <h1 className="price">Услуги</h1>
        <div className="col-12 d-flex justify-content-center">
          <div className="col-9 row justify-content-around text-wrap">
            <Card header="Пиллинг" text="asdasdas" price={400} />
            <Card
              header="Пиллинг"
              text="Удаление, отшелушивание верхнего ороговевшего слоя кожи"
              price={400}
            />

            <Card header="Пиллинг" text="asdasdas" price={400} />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="col-9 row justify-content-around text-wrap">
            <Card header="Пиллинг" text="asdasdas" price={400} />
            <Card
              header="Пиллинг"
              text="Удаление, отшелушивание верхнего ороговевшего слоя кожи"
              price={400}
            />

            <Card header="Пиллинг" text="asdasdas" price={400} />
          </div>
        </div>
      </div>
    </>
  );
};
