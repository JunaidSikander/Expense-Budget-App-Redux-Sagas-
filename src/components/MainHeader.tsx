import React from "react"
import {Header} from "semantic-ui-react";

type MainHeaderProps = {
    title: string,
    type?: string
}

export default function MainHeader({title, type = "h1"}: MainHeaderProps) {
    return <Header as={type}> {title} </Header>
}
