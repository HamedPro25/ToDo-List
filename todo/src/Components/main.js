import React, { Component } from "react";
import Task from "./task";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Popup from "./popupp";
import "reactjs-popup/dist/index.css";
import { Button, ButtonBase } from "@mui/material";
import "../styles/main.css";
import { useState, useEffect } from "react";

export default function Main() {
  const [message, setMessage] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);
  console.log(message["Progress"]);
  return (
    <div className="">
      <div className="row head">
        <div className="col-2">Tasks</div>
        <div className="col-8 fil d-flex align-items-center">
          <SearchIcon />
          Search Task
        </div>
        <div className="col-2 d-flex flex-row-reverse align-items-center">
          <p>Hamed LAOUZ</p>
          <Avatar>H</Avatar>
          <Badge color="error" badgeContent=" " variant="dot">
            <NotificationsIcon />
          </Badge>
          <Badge color="error" badgeContent=" " variant="dot">
            <EmailIcon />
          </Badge>
        </div>
      </div>
      <div className="row mainPanel">
        <div className="row headPane">
          <div className="col-10 d-flex ">
            <div className="select">All Tasks</div>
            <div className="panItem">New Task</div>
            <div className="panItem">Complete</div>
          </div>
          <div className="col-2 d-flex flex-row-reverse">
            <button className="butto" onClick={togglePopup}>
              New Task
            </button>
            <Popup isOpen={isPopupOpen} onClose={togglePopup} />
          </div>
        </div>
        <div className="row tabDescribe">
          <div className="col-3">Task Name</div>
          <div className="col-3">Progress Status</div>
          <div className="col-3">Level</div>
          <div className="col-3">Target Time</div>
        </div>
        <div className="sep"></div>
        <Task
          name={message["Name"]}
          status={message["Progress"]}
          date="Date"
          col={message["Color"]}
          lev={message["Level"]}
        />
        <div className="sep"></div>
        <Task name="Laouz" status={15} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Ayoub" status={70} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Hakim" status={45} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Hiba" status={10} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Meriem" status={20} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Soheyb" status={25} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Mohamed" status={60} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Lina" status={80} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
        <Task name="Ikram" status={210} date="Date" col="red" lev="Urgent" />
        <div className="sep"></div>
      </div>
    </div>
  );
}
