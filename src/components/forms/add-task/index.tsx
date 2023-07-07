import React from "react";
import { Formik } from "formik";

import { Task } from "@/types";
import Input from "@/components/input";
import { taskPriorityOptions } from "@/constants";
import SelectInput from "@/components/select-input";
import SubmitButton from "@/components/submit-button";
import { addTaskValidationSchema } from "@/validation-schemas";

interface IAddTask {
  taskList: Task[];
  taskToEdit: Task | undefined;
  showModal: (show: boolean) => void;
  setTaskList: (taskList: Task[]) => void;
  setTaskToEdit: (task: Task | undefined) => void;
}

function AddTask({
  taskList,
  taskToEdit,
  showModal,
  setTaskList,
  setTaskToEdit,
}: IAddTask) {
  const taskToEditNameCopy = taskToEdit?.name;

  return (
    <div>
      <Formik
        validateOnBlur={false}
        validationSchema={addTaskValidationSchema}
        initialValues={{
          name: taskToEdit ? taskToEdit.name : "",
          priority: taskToEdit ? taskToEdit.value : "",
        }}
        onSubmit={(values, { resetForm }) => {
          if (taskToEdit) {
            const otherTasks = taskList.filter(
              (task) => task.name !== taskToEditNameCopy
            );
            setTaskList([
              ...otherTasks,
              { name: values.name, value: Number(values.priority) },
            ]);
          } else {
            setTaskList([
              ...taskList,
              { name: values.name, value: Number(values.priority) },
            ]);
            setTaskToEdit(undefined);
          }
          resetForm();
          showModal(false);
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Task Name"
              name="name"
              type="text"
              placeholder="Enter Task Name"
              value={values.name}
              touched={touched.name}
              handleChange={handleChange}
              validationErrors={errors.name}
            />
            <SelectInput
              label="Task Priority"
              name="priority"
              placeholder="Select Task Priority"
              options={taskPriorityOptions}
              valueAttribute={"value"}
              value={values.priority}
              touched={touched.priority}
              handleChange={handleChange}
              validationErrors={errors.priority}
            />
            <SubmitButton
              label="Add Task"
              styles="w-full bg-primary-forestGreen hover:bg-primary-darkGreen"
            />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddTask;
