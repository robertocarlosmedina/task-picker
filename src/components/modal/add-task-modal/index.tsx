import Modal from "..";
import { Task } from "@/types";
import ModalBody from "./modal-body";

interface IAddTask {
  header: string;
  taskList: Task[];
  taskToEdit: Task | undefined;
  setTaskList: (taskList: Task[]) => void;
  setShowDialog: (state: boolean) => void;
  setTaskToEdit: (task: Task | undefined) => void;
}

function AddTaskModal({
  header,
  taskList,
  taskToEdit,
  setShowDialog,
  setTaskList,
  setTaskToEdit,
}: IAddTask) {
  return (
    <Modal
      header={header}
      modalBody={
        <ModalBody
          showModal={setShowDialog}
          taskList={taskList}
          setTaskList={setTaskList}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
      }
      allowYScroll={true}
      closeModalCallback={() => setShowDialog(false)}
    />
  );
}

export default AddTaskModal;
