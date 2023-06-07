import {Dispatch, SetStateAction} from "react";

export interface IEntry {
    id: number | string,
    value: number,
    isExpense: boolean,
    description: string
}

export interface IDeleteEntry {
    deleteEntry: (id: string) => void;
}

export interface IAddEntry {
    addEntry?: (entry: INewEntry) => void;
}

export interface INewEntry {
    description: string,
    value: number,
    isExpense: boolean
};

export interface ISetNewEntry {
    setNewEntry: Dispatch<SetStateAction<INewEntry>>
}

export interface ISetIsOpen {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface IEntryProps {
    entries: IEntry[],
    deleteEntry: (id: string) => void;
    editEntry: (id: string) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export type TEntryLineProps = {
    deleteEntry: (id: string) => void,
    editEntry: (id: string) => void,
    setIsOpen: Dispatch<SetStateAction<boolean>>
} & IEntry

export interface IEntry {
    id: number | string,
    value: string,
    isExpense: boolean,
    description: string
}
