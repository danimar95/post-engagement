import { Dispatch } from "@reduxjs/toolkit";
import { HTMLInputTypeAttribute, MouseEventHandler, SetStateAction } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onChange: any;
  disabled?: boolean;
  extraClass?: string;
  isSubmit?: boolean;
}

export interface InputProps {
  id: string;
  value: string;
  name: string;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  extraClass?: string;
  search?: boolean;
  setSearchTerm?: Dispatch<SetStateAction<any>>;
  type?: HTMLInputTypeAttribute;
}

export interface ModalProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface DropdownActionProps{
  name: string;
  action?: any;
}

export interface DropdownProps {
  text: string;
  hasIcon?: boolean;
  extraClass?: string;
}

export interface CheckboxTypes {
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface DataProps {
  checked: string[];
  engagementData: EngagementProps[];
  filteredData: EngagementProps[];
  isRenaming: boolean;
  currentItem: EngagementProps,
  dataCount: string,
}

export interface EngagementProps {
  name: string;
  engagement: string;
  acquired: number;
  conversion: string;
  id: string;
  platform: "messenger" | "instagram";
};

export interface PlatformProps {
  value: string;
  label: string;
}

export interface EngagementCardProps {
  setIsOpen: (isOpen: boolean) => void;
}