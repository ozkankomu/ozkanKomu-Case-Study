import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../scss/Table.scss";

const Table = ({ task, search, deleteData }) => {
  const charCode = search.charCodeAt();
  const [notfound, setNotfound] = useState(
    "The cargo information you were looking for was not found"
  );

  return (
    <div className="tableContainer">
      {!(charCode === 32) && search && (
        <table className="table">
          {task
            ?.filter(
              (filteredTask) =>
                filteredTask?.name.toLowerCase().includes(search) ||
                filteredTask?.policyNo.toLowerCase().includes(search)
            )
            .map((item) => {
              const { id, name, email, phone, policyNo } = item;

              return (
                <tbody key={id}>
                  <tr>
                    <td colSpan="4" className="nameCell">
                      {name}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <PhoneIcon /> {phone}
                    </td>
                    <td>
                      <AlternateEmailIcon /> {email}
                    </td>
                    <td>
                      <DescriptionIcon /> {policyNo}
                    </td>
                    <td className="deleteCell" onClick={() => deleteData(id)}>
                      <DeleteForeverIcon className="deleteIcon" />
                      Delete
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      )}
    </div>
  );
};

export default Table;
