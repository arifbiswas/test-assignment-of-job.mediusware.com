import React from "react";

const Problem2 = () => {
  const [ALLdata, setALLData] = React.useState([]);
  const [countyData, setCountryData] = React.useState([]);
  const [selectItem, setSelectItem] = React.useState({});
  const [checked, setChecked] = React.useState(false);
  const [searchText, setSearchText] = React.useState(0);

  React.useEffect(() => {
    fetch(
      `https://contact.mediusware.com/api/contacts/?format=json&search=${Number(
        searchText
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (checked) {
          const eventData = data?.results.filter((item) => item.id % 2 == 0);
          setALLData(eventData);
        } else {
          setALLData(data?.results);
        }
      })
      .catch((err) => console.log(err));
  }, [checked, searchText]);

  React.useEffect(() => {
    fetch(
      `https://contact.mediusware.com/api/country-contacts/United%20States/?search=${Number(
        searchText
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (checked) {
          const eventData = data?.results.filter((item) => item.id % 2 == 0);
          setCountryData(eventData);
        } else {
          setCountryData(data?.results);
        }
      })
      .catch((err) => console.log(err));
  }, [checked, searchText]);

  //   console.log(selectItem);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            class="btn btn-lg btn-outline-primary "
            data-bs-toggle="modal"
            data-bs-target="#modalA"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#modalB"
          >
            US Contacts
          </button>
        </div>
      </div>
      {/* modal A  start */}

      <div
        class="modal fade "
        id="modalA"
        tabindex="-1"
        aria-labelledby="modalBLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header gap-4">
              <h5 class="modal-title" id="modalBLabel">
                Modal A
              </h5>
              <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body  */}
            <div class="modal-body  ">
              <table className="table table-striped ">
                <thead>
                  <tr className="flex-column ">
                    <th scope="col">Serial</th>
                    <th scope="col">Country</th>
                    <th scope="col">Number</th>
                  </tr>
                  {ALLdata &&
                    ALLdata?.map((item, index) => (
                      <tr
                        key={index}
                        className="flex-column "
                        onClick={() => setSelectItem(item)}
                        data-bs-toggle="modal"
                        data-bs-target="#modalC"
                        data-bs-dismiss="modal"
                      >
                        <td scope="col">{item?.id}</td>
                        <td scope="col">{item?.country?.name}</td>
                        <td scope="col">{item?.phone}</td>
                      </tr>
                    ))}
                </thead>
                <tbody></tbody>
              </table>
            </div>
            {/* body  */}
            <div class="modal-footer justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center gap-2"
                onClick={() => setChecked(!checked)}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  value=""
                  checked={checked}
                  aria-label="Radio button for following text input"
                />
                <label>Only even</label>
              </div>

              <div className=" d-flex gap-3">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalA"
                  data-bs-dismiss="modal"
                  class="btn modal-btn-color-a"
                >
                  All Contacts
                </button>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalB"
                  data-bs-dismiss="modal"
                  class="btn btn modal-btn-color-a"
                >
                  US Contacts
                </button>
                <button
                  type="button"
                  class="btn btn modal-btn-color-a"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal A end */}
      {/* modal B  start */}

      <div
        class="modal fade "
        id="modalB"
        tabindex="-1"
        aria-labelledby="modalBLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header gap-4">
              <h5 class="modal-title" id="modalBLabel">
                Modal B
              </h5>
              <input
                type="text"
                placeholder="Search here"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body  */}
            <div class="modal-body  ">
              <table className="table table-striped ">
                <thead>
                  <tr className="flex-column ">
                    <th scope="col">Serial</th>
                    <th scope="col">Country</th>
                    <th scope="col">Number</th>
                  </tr>
                  {countyData &&
                    countyData?.map((item, index) => (
                      <tr
                        key={index}
                        className="flex-column "
                        onClick={() => setSelectItem(item)}
                        data-bs-toggle="modal"
                        data-bs-target="#modalC"
                        data-bs-dismiss="modal"
                      >
                        <td scope="col">{item?.id}</td>
                        <td scope="col">{item?.country?.name}</td>
                        <td scope="col">{item?.phone}</td>
                      </tr>
                    ))}
                </thead>
                <tbody></tbody>
              </table>
            </div>
            {/* body  */}
            <div class="modal-footer justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center gap-2"
                onClick={() => setChecked(!checked)}
              >
                <input
                  class="form-check-input mt-0"
                  type="radio"
                  value=""
                  checked={checked}
                  aria-label="Radio button for following text input"
                />
                <label>Only even</label>
              </div>

              <div className=" d-flex gap-3">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalA"
                  data-bs-dismiss="modal"
                  class="btn modal-btn-color-b"
                >
                  All Contacts
                </button>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalB"
                  data-bs-dismiss="modal"
                  class="btn modal-btn-color-b"
                >
                  US Contacts
                </button>
                <button
                  type="button"
                  class="btn modal-btn-color-b"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal B end */}
      {/* modal C  start */}

      <div
        class="modal fade "
        id="modalC"
        tabindex="-1"
        aria-labelledby="modalBLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalBLabel">
                Modal C
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body  */}
            <div class="modal-body  ">
              <div>Serial : {selectItem.id}</div>
              <h4>Country Name : {selectItem?.country?.name}</h4>
              <h5>Phone Number : {selectItem?.phone}</h5>
            </div>
            {/* body  */}
            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn modal-btn-color-c"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal C end */}
    </div>
  );
};

export default Problem2;
