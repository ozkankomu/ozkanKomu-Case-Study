import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./scss/App.scss";
import { toastsuccess, toastwarn } from "./toastify/Toastify";

function App() {
  const [task, setTask] = useState([]);
  const url = " http://localhost:3002/task";

  const getData = async () => {
    const response = await fetch(url);

    const data = await response.json();
    setTask(data);
  };

  const postData = async (data) => {
    await axios.post(url, data);
    getData();
    toastsuccess("New Cargo Added Successfully");
  };
  const deleteData = async (id) => {
    await axios.delete(url + `/${id}`);
    getData();
    toastwarn("Cargo information deleted successfuly");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Home task={task} postData={postData} deleteData={deleteData} />
    </div>
  );
}

export default App;
