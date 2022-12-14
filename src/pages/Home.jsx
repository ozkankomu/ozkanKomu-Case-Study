import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "../scss/Home.scss";
import Table from "../components/Table";
import Modal from "../components/Modal";
import { ToastContainer } from "react-toastify";

const Home = ({ task, postData, deleteData }) => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="main" data-testid="home">
      <div className="containerSearch">
        <div className="searchBox">
          <SearchIcon className="searchIcon" />
          <TextField
            id="input-with-sx"
            label="SEARCH (Client Name / Policy Number)"
            variant="standard"
            name="search"
            className="searchInput"
            data-testid="searchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <div>
          <button
            type="button"
            className="addCargoButton"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Cargo
          </button>
        </div>
      </div>
      <Table task={task} search={search} deleteData={deleteData} />
      <Modal postData={postData} />
      <ToastContainer />
    </div>
  );
};

export default Home;
