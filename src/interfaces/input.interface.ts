import { ChangeEventHandler } from "react";

export interface IInput {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  linkComponent?: JSX.Element;
  touched: boolean | undefined;
  validationErrors: string | undefined;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
