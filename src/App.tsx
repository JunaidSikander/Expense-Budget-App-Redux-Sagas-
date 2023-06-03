import {Container} from "semantic-ui-react";
import {DisplayBalance, DisplayBalances, EntryLine, MainHeader, NewEntryForm} from "./components";

function App() {

    return (
        <Container>
            <MainHeader title="Budget"/>
            <DisplayBalance
                size="small"
                label="Your Balance"
                value="2,500.54"
            />

            <DisplayBalances/>

            <MainHeader title="History" type="h3"/>
            <EntryLine description="debited" value="$10.00" isExpense/>
            <EntryLine description="credited" value="$100.00"/>
            <EntryLine description="debited" value="$10.00" isExpense/>


            <MainHeader title="Add new transaction" type="h3"/>
            <NewEntryForm/>

        </Container>
    )
}

export default App
