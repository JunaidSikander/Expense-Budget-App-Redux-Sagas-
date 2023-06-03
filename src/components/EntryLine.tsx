import React from "react";
import {Grid, Icon, Segment} from "semantic-ui-react";

type EntryLineProps = {
    description: string,
    isExpense?: boolean,
    value: string | number
}
export default function EntryLine(props: EntryLineProps) {
    const {description,value,isExpense = false} = props;
    const color = isExpense ? 'red' : 'green'
    return <Segment color={color}>
        <Grid columns={3} textAlign="right">
            <Grid.Row>
                <Grid.Column width={10} textAlign="left">{description}</Grid.Column>
                <Grid.Column width={3} textAlign="right">{value}</Grid.Column>
                <Grid.Column width={3}>
                    <Icon name="edit" bordered/>
                    <Icon name="trash" bordered/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
}
