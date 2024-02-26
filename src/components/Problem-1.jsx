import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [data, setData] = useState([]);
  const [dataActivity, setDataActivity] = useState(false);
  const [show, setShow] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const status = from.status.value;
    const newData = { name, status };
    // active
    if (status === "active" || status === "Active") {
      const existingActiveData = localStorage.getItem("active");
      console.log(existingActiveData);
      if (existingActiveData) {
        const existingActiveParseData = JSON.parse(existingActiveData);
        const createNewDataB = [...existingActiveParseData, newData];
        localStorage.setItem("active", JSON.stringify(createNewDataB));
      } else {
        localStorage.setItem("active", JSON.stringify([newData]));
      }
    }
    // completed
    else if (status === "completed" || status === "Completed") {
      const existingCompletedData = localStorage.getItem("completed");
      console.log(existingCompletedData);
      if (existingCompletedData) {
        const existingCompletedParseData = JSON.parse(existingCompletedData);
        const createNewDataB = [...existingCompletedParseData, newData];
        localStorage.setItem("completed", JSON.stringify(createNewDataB));
      } else {
        localStorage.setItem("completed", JSON.stringify([newData]));
      }
    }
    // all
    else {
      const existingAllData = localStorage.getItem("all");
      console.log(existingAllData);
      if (existingAllData) {
        const existingAllParseData = JSON.parse(existingAllData);
        const createNewDataB = [...existingAllParseData, newData];
        localStorage.setItem("all", JSON.stringify(createNewDataB));
      } else {
        localStorage.setItem("all", JSON.stringify([newData]));
      }
    }
    setDataActivity(!dataActivity);
  };

  const handleClick = (val) => {
    setShow(val);
  };
  // console.log(show);
  useEffect(() => {
    const activeData = JSON.parse(localStorage.getItem("active"));
    const completed = JSON.parse(localStorage.getItem("completed"));
    const all = JSON.parse(localStorage.getItem("all"));
    if (show === "all") {
      const collectData = [...activeData, ...completed, ...all];
      setData(collectData);
    }
    if (show === "active") {
      setData(activeData);
    }
    if (show === "completed") {
      setData(completed);
    }
  }, [show, dataActivity]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                name="status"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr className="flex-column ">
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
              {data &&
                data?.map((item, index) => (
                  <tr key={index} className="flex-column ">
                    <td scope="col">{item?.name}</td>
                    <td scope="col">{item.status}</td>
                  </tr>
                ))}
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
