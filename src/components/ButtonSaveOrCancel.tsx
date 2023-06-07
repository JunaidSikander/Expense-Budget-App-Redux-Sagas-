import React from "react"
import {Button} from "semantic-ui-react";
import {IAddEntry, INewEntry} from "../types";

interface IAddNewEntry extends INewEntry, IAddEntry {
    resetForm: () => void;
}

export default function ButtonSaveOrCancel(props: IAddNewEntry) {
    const {description, value, isExpense, addEntry, resetForm} = props;
    return <Button.Group style={{marginTop: 20}}>
        <Button>Cancel</Button>
        <Button.Or/>
        <Button primary onClick={() => {
            addEntry({description, value, isExpense})
            resetForm();
        }}>Ok</Button>
    </Button.Group>
}
