import React from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

import { Task } from "@/types";
import SubmitButton from "../submit-button";
import MainUICard from "../ui-cards/main-ui-card";

interface ITaskContainer {
  taskList: Task[];
  removerTask: (index: number) => void;
  setShowAddTaskModal: (status: boolean) => void;
  handleEditTask: (task: Task) => void;
}

function TaskContainer({ taskList, setShowAddTaskModal, removerTask, handleEditTask }: ITaskContainer) {
  return (
    <>
      <MainUICard styles="mb-2">
        <div className="flex px-10 py-4">
          <h1 className="text-xl grid place-content-center font-bold text-primary-purple">
            Task Picker
          </h1>
          <div className="flex-1"></div>
          <SubmitButton
            styles="w-[6rem] bg-primary-forestGreen hover:bg-primary-darkGreen font-bold"
            label="Add"
            onClick={() => setShowAddTaskModal(true)}
          />
        </div>
      </MainUICard>
      <MainUICard styles="w-[30rem] py-6 max-h-[80vh] h-auto overflow-hidden overflow-y-auto">
        <>
          <div className="w-full ">
            <ul>
              {taskList.map((task, index) => (
                <li key={index}>
                  <div className="flex mx-8 my-2 px-4 py-3 bg-primary-midnightBlack rounded-xl border-[0.05rem] border-primary-stormyGray">
                    <div className="text-left grid place-content-center">
                      <p className="text-primary-purple font-bold text-lg">
                        <span className="font-bold text-lg text-white">
                          Identifier:
                        </span>
                        {` T-${index + 1}`}
                      </p>
                      <p className="text-primary-white">
                        <span className="font-bold text-lg">Task: </span>
                        {task.name}
                      </p>
                    </div>
                    <div className="flex-1"></div>
                    <div className="grid place-content-center gap-2 ">
                      <div className="p-2 bg-primary-stormyGray rounded-full cursor-pointer">
                        <MdDelete
                          className="w-6 h-6 cursor-pointer text-primary-coral"
                          onClick={() => removerTask(index)}
                        />
                      </div>
                      <div className="p-2 bg-primary-stormyGray rounded-full cursor-pointer">
                        <MdModeEditOutline
                          className="w-6 h-6 text-primary-mintGreen cursor-pointer"
                          onClick={() => handleEditTask(task)}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      </MainUICard>
    </>
  );
}

export default TaskContainer;
