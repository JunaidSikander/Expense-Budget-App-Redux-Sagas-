import React from "react"
import {Form} from "semantic-ui-react";
import {ButtonSaveOrCancel} from "./index";

export default function NewEntryForm() {
    return <Form unstackable>
        <Form.Group>
            <Form.Input
                icon="tags"
                width={12}
                label="Description"
                placeholder="New shinny thing"
            />
            <Form.Input
                icon="dollar"
                width={4}
                label="Value"
                iconPosition="left"
                placeholder="100.00"
            />
        </Form.Group>
        <ButtonSaveOrCancel/>
    </Form>
}
