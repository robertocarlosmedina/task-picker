import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Task } from "@/types";
import AddTaskModal from "@/components/modal/add-task-modal";
import TaskContainer from "@/components/task-container";

const SpinWheel = dynamic(() => import("@/components/spin-wheel"), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const tasks = localStorage.getItem("taskList");
    setTaskList(tasks ? JSON.parse(tasks) : []);
  }, [])

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>(undefined);

  const removerTask = (index: number) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));
  };

  const updateTaskList = (taskList: Task[]) => {
    setTaskList(taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setShowAddTaskModal(true);
  };

  return (
    <>
      <Head>
        <title>Simple Auth app</title>
        <meta name="description" content="Created using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-screen h-auto min-h-screen bg-primary-midnightBlack text-primary-lavenderPurple overflow-y-auto overflow-x-hidden text-center">
        {showAddTaskModal && (
          <AddTaskModal
            header="Add New Task"
            setShowDialog={setShowAddTaskModal}
            taskList={taskList}
            setTaskList={updateTaskList}
            taskToEdit={taskToEdit}
            setTaskToEdit={setTaskToEdit}
          />
        )}
        <div className="h-screen w-full grid place-content-center z-0">
          <SpinWheel taskList={taskList} />
        </div>
        <div className="w-full h-screen grid place-content-center">
          <TaskContainer
            taskList={taskList}
            removerTask={removerTask}
            setShowAddTaskModal={setShowAddTaskModal}
            handleEditTask={handleEditTask}
          />
        </div>
      </main>
    </>
  );
}
