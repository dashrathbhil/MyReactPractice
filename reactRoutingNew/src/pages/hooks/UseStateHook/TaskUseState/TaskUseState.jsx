import React from "react";
import BackgroundColorChanger from "./BackgroundColorChanger";
import SubscribeButton from "./SubscribeButton";
import BlackWhiteTheme from "./BlackWhiteTheme";
import PasswordToggle from "./PasswordToggle";
import WordCounter from "./WordCounter";
import AgeChecker from "./AgeChecker";
import ToDoList from "./ToDoList";

function TaskUseState() {
  return (
    <>
      <div className="container-fluid">
        <div className="row   text-center bg-danger">
          <div className="col">
            <h3>Task Of useState</h3>
          </div>
        </div>
        <div className="row flex-column">
          <div className="col">
            <BackgroundColorChanger />
          </div>
          <div className="col">
            <SubscribeButton />
          </div>
          <div className="col">
            <BlackWhiteTheme />
          </div>
          <div className="col">
            <PasswordToggle />
          </div>
          <div className="col">
            <WordCounter />
          </div>
          <div className="col">
            <AgeChecker />
          </div>
          <div className="col">
            <ToDoList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskUseState;
