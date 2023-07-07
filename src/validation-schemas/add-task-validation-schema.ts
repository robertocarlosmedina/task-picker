import * as yup from "yup";

export const addTaskValidationSchema = yup.object().shape({
  name: yup.string().required("Task Name is a required field"),
  priority: yup.string().required("Priority is a required field")
});
