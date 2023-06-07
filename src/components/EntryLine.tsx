import React from "react";
import {Grid, Icon, Segment} from "semantic-ui-react";
import {TEntryLineProps} from "../types";


export default function EntryLine(props: TEntryLineProps) {
    const {id, description, value, isExpense = false, deleteEntry,editEntry, setIsOpen} = props;
    const color = isExpense ? 'red' : 'green'


    return <>
        <Segment color={color}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                    <Grid.Column width={3} textAlign="right">${value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit"
                              onClick={() => editEntry(id.toString())}
                              bordered/>
                        <Icon
                            name="trash"
                            onClick={() => deleteEntry(id.toString())}
                            bordered
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </>
}
