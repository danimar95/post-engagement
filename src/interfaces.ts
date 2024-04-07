import { Dispatch } from "@reduxjs/toolkit";
import { HTMLInputTypeAttribute, MouseEventHandler, SetStateAction } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onChange: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  extraClass?: string;
  isSubmit?: boolean;
}

export interface InputProps {
  id: string;
  searchTerm: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extraClass?: string;
  search?: boolean;
  setSearchTerm?: Dispatch<SetStateAction<any>>;
  type?: HTMLInputTypeAttribute;
}

export interface ModalProps {
  id: string;
  header: string;
  content: string;
}

export interface DropdownProps {
  text: string;
  options: Array<string>
  hasIcon?: boolean;
  extraClass?: string;
}

export interface CheckboxTypes {
  name: string;
  checked?: boolean;
}