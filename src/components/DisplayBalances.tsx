import React from "react";
import {DisplayBalance} from "./index";
import {Grid, Segment} from "semantic-ui-react";

export default function DisplayBalances() {
    return <Segment textAlign="center">
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <DisplayBalance
                        color="green"
                        label="Income"
                        value="2,500.54"
                    />
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance
                        color="red"
                        label="Expenses"
                        value="1,024.00"
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
}
