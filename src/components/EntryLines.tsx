import React from "react";
import {IEntryProps} from "../types";
import {Container} from "semantic-ui-react";
import {EntryLine} from "./index";

export default function EntryLines(props: IEntryProps) {
    const {entries, deleteEntry, setIsOpen, editEntry} = props;
    return (
        <Container>
            {entries.map((entry) =>
                <EntryLine
                    key={entry.id}
                    editEntry={editEntry}
                    deleteEntry={deleteEntry}
                    setIsOpen={setIsOpen}
                    {...entry}
                />
            )}
        </Container>
    )
}
