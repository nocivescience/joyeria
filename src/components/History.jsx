import "../files/history.css";
export const History = (props) => {
  return (
    <div className="card mb-3 mx-4 title">
      <div className="row g-0 subparrafo p-3">
        <div className="col-md-4">
          <img src={props.source} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              {props.detail}
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
