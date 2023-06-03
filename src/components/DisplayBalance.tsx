import React from "react"
import {Statistic} from "semantic-ui-react";

type DisplayBalanceProps = {
    color?: "red" | "green",
    size?: "tiny" | "small",
    label: string,
    value: number | string
}

export default function DisplayBalance(props: DisplayBalanceProps) {
    const {size = "tiny", color, label, value} = props;
    return <Statistic size={size} color={color}>
        <Statistic.Label
            // style={{ textAlign: "left" }}
        >{label}:</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
}
