import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {Checkbox, Form, Segment} from "semantic-ui-react";
import {INewEntry} from "../types";


interface IEntryForm {
    newEntry: INewEntry,
    setNewEntry: Dispatch<SetStateAction<INewEntry>>,
}

export default function EntryForm(props: IEntryForm) {
    const {setNewEntry, newEntry} = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        const inputValue = name === "value" ? Number(value): value;

        setNewEntry(prevState => ({
            ...prevState,
            [name]: inputValue
        }));
    }

    const toggleExpense = () => {
        setNewEntry((prevState) => ({
            ...prevState,
            isExpense: !prevState.isExpense
        }))
    }

    return <>
        <Form.Group>
            <Form.Input
                name="description"
                icon="tags"
                width={12}
                label="Description"
                placeholder="New shinny thing"
                value={newEntry.description}
                onChange={onChangeHandler}
            />
            <Form.Input
                name="value"
                icon="dollar"
                width={4}
                label="Value"
                iconPosition="left"
                placeholder="100.00"
                type="number"
                value={newEntry.value}
                onChange={onChangeHandler}
            />
        </Form.Group>
        <Segment compact>
            <Checkbox
                toggle
                label="is expense"
                checked={newEntry.isExpense}
                onChange={toggleExpense}/>
        </Segment>
    </>
}
