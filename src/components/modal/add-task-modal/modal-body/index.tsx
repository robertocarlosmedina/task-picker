import { Task } from "@/types";
import AddTask from "@/components/forms/add-task";
import ModalBodyContainer from "../../modal-body-container";

interface ModalBodyProps {
  taskList: Task[];
  taskToEdit: Task | undefined;
  showModal: (show: boolean) => void;
  setTaskList: (taskList: Task[]) => void;
  setTaskToEdit: (task: Task | undefined) => void;
}

function ModalBody({
  taskList,
  taskToEdit,
  showModal,
  setTaskList,
  setTaskToEdit,
}: ModalBodyProps) {
  return (
    <ModalBodyContainer styles="h-[80vh] max-h-[23rem]" allowYScroll={true}>
      <>
        <div className="w-[70vw] md:w-[40rem]">
          <AddTask
            showModal={showModal}
            taskList={taskList}
            setTaskList={setTaskList}
            taskToEdit={taskToEdit}
            setTaskToEdit={setTaskToEdit}
          />
        </div>
      </>
    </ModalBodyContainer>
  );
}

export default ModalBody;
