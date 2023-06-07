import React from "react";
import {Button, Modal} from "semantic-ui-react";
import {IAddEntry, INewEntry, ISetIsOpen, ISetNewEntry} from "../types";
import EntryForm from "./EntryForm";

interface IModalEditProps extends IAddEntry, ISetNewEntry, ISetIsOpen {
    isOpen: boolean | undefined,
    newEntry: INewEntry,
    updateEntry: () => void
}

export default function ModalEdit(props: IModalEditProps) {
    const {isOpen, setIsOpen, newEntry, setNewEntry, updateEntry} = props
    return <Modal open={isOpen}>
        <Modal.Header>Edit Entry</Modal.Header>
        <Modal.Content>
            <EntryForm
                newEntry={newEntry}
                setNewEntry={setNewEntry}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={updateEntry} primary>Ok</Button>
        </Modal.Actions>
    </Modal>
}
