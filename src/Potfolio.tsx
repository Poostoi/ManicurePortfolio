export const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="justify-content-center  text-center background p-5"
      >
        <div className="col-12 d-flex justify-content-center  text-center">
          <h1 className="m-0 mb-4">Наши работы</h1>
        </div>
        <div className="row m-0 col-12 d-flex justify-content-center">
          <div className="row">
            <div className="col-4 img-1"></div>
            <div className="col-4 img-2"></div>
            <div className="col-4 img-3"></div>
          </div>
          <div className="row">
            <div className="col-4 img-4"></div>
            <div className="col-4 img-5"></div>
            <div className="col-4 img-6"></div>
          </div>
          <div className="row">
            <div className="col-4 img-7"></div>
            <div className="col-4 img-8"></div>
            <div className="col-4 img-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};
