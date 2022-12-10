import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./scss/App.scss";
import { toastsuccess, toastwarn } from "./toastify/Toastify";

function App() {
  const [task, setTask] = useState([]);
  const url = " https://63927eabac688bbe4c64aa3c.mockapi.io/users/";

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTask(data);
    } catch (error) {
      toastwarn(error.message);
    }
  };

  const postData = async (data) => {
    try {
      await axios.post(url, data);
      getData();
      toastsuccess("New Cargo Added Successfully");
    } catch (error) {
      toastwarn(error.message);
    }
  };
  const deleteData = async (id) => {
    try {
      await axios.delete(url + `${id}`);
      getData();
      toastsuccess("Cargo information deleted successfuly");
    } catch (error) {
      toastwarn(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-testid="app">
      <Home task={task} postData={postData} deleteData={deleteData} />
    </div>
  );
}

export default App;
