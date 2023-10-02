import React from "react";
import DatePickerComponent from "./datepicker";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

import "../styles/pops.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "No Priority",
  "Low Priority",
  "Medium Proirity",
  "High Prority",
  "Urgent",
  "Completed",
];

const Popup = ({ isOpen, onClose }) => {
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    isOpen && (
      <div className="popup">
        <div className="popup-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>Create New Task</h2>
          <div className="row">
            <p>Enter yourTask Name:</p>
            <TextField
              id="outlined-basic"
              label="Task Name"
              variant="outlined"
            />
          </div>
          <div className="row">
            <p>Task Priority Level</p>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
