import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WarehouseDetail from "./pages/WarehouseDetail";
import { Modal } from "flowbite";
import ModalLayout from "./layout/Modal";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import EditWarehouse from "./pages/EditWarehouse";

function App() {
  const [editModalId, setEditModalId] = useState("");
  const handleHabitSUbmit = () => {
    console.log("hhh", habit);
    const HabitId = Math.floor(Math.random(Date.now()) * 100);

    const habitData = { id: HabitId, name: habit, week: weekLog };
    console.log("habitData", habitData, HabitId);
    dispatch(addHabit(habitData));
    setHabit("");
  };
  const handleHabitChange = (e) => {
    console.log("onchage", e.target.value);
    setHabit(e.target.value);
  };
  return (
    <div className="[w-100%]">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:warehouseid" element={<WarehouseDetail />} />
        <Route exact path="/edit/:warehouseid" element={<EditWarehouse />} />
      </Routes>

      {/* <ModalLayout
        // modal={modal}
        header={"Add a Habit"}
        onSubmit={handleHabitSUbmit}
        setEditModalId={setEditModalId}
      >
        <Form>
          <Input
            type={"text"}
            placeholder={"add  a habit"}
            label={"Habit"}
            id={"habit-title"}
            required={true}
            // value={habit}
            editModalId={editModalId}
            onchange={handleHabitChange}
          />
        </Form>
      </ModalLayout> */}
    </div>
  );
}

export default App;
