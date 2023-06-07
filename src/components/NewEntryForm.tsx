import React from "react"
import {Form} from "semantic-ui-react";
import {IAddEntry, INewEntry, ISetNewEntry} from "../types";
import {ButtonSaveOrCancel, EntryForm} from "./index";

interface INewEntryForm extends IAddEntry, ISetNewEntry {
    newEntry: INewEntry,
}

export default function NewEntryForm(props: INewEntryForm) {
    const {addEntry, newEntry, setNewEntry} = props

    const resetForm = () => setNewEntry({description: "", value: "", isExpense: false})

    return <Form unstackable>
        <EntryForm
            newEntry={newEntry}
            setNewEntry={setNewEntry}
        />
        <ButtonSaveOrCancel
            addEntry={addEntry}
            resetForm={resetForm}
            {...newEntry}
        />
    </Form>
}
