import React from "react";
import {DisplayBalance} from "./index";
import {Grid, Segment} from "semantic-ui-react";

interface IDisplayBalance {
    totalIncome: number,
    totalExpense: number
}

export default function DisplayBalances(props: IDisplayBalance) {
    const { totalIncome, totalExpense } = props;
    return <Segment textAlign="center">
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                    <DisplayBalance
                        color="green"
                        label="Income"
                        value={totalIncome}
                    />
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance
                        color="red"
                        label="Expenses"
                        value={totalExpense}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
}
