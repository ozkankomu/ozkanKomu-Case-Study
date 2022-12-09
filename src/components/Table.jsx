import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../scss/Table.scss";

const Table = ({ task, search, deleteData }) => {
  const charCode = search?.charCodeAt(0);

  console.log(task);

  const [notFound, setNotFound] = useState(
    "The cargo information you were looking for was not found 😔"
  );
  const [filteredData, setFilteredData] = useState([]);
  const filtered = () => {
    const data = task?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(search) ||
        item?.policyNo?.toLowerCase().includes(search)
    );
    setFilteredData(data);
  };

  useEffect(() => {
    filtered();
  }, [search, task]);

  return (
    <div className="tableContainer" data-testid="table">
      {!(charCode === 32) && search && (
        <div className="div">
          {filteredData.length > 0 ? (
            filteredData?.map((item) => {
              const { id, name, email, phone, policyNo } = item;
              console.log(id);
              return (
                <div className="MainChild" key={id}>
                  {filteredData && (
                    <div className="container ">
                      <div className="nameDiv">{name}</div>

                      <div className="row">
                        <div className=" col-sm-12 col-md-6 col-lg-3 col-xl-3 divIcon">
                          <p>
                            <PhoneIcon className="icon" /> {phone}
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 divIcon">
                          <p>
                            <AlternateEmailIcon className="icon" /> {email}
                          </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 divIcon">
                          <p>
                            <DescriptionIcon className="icon" /> {policyNo}
                          </p>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 divIcon">
                          <p
                            className="deleteCell"
                            onClick={() => deleteData(id)}
                          >
                            <DeleteForeverIcon className="icon deleteIcon" />
                            Delete
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="messageDiv">
              <p className="message">{notFound}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
