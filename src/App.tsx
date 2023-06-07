import React, {useEffect, useState} from "react";
import {Container} from "semantic-ui-react";
import {DisplayBalance, DisplayBalances, EntryLines, MainHeader, ModalEdit, NewEntryForm} from "./components";
import {IEntry, INewEntry} from "./types";


function App() {
    const [entries, setEntries] = useState<IEntry[]>(initialEntries)
    const [newEntry, setNewEntry] = useState<INewEntry>({description: "", value: 0, isExpense: false});
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [entryId, setEntryId] = useState<string | null>(null)
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalIncomes = 0;
        let totalExpenses = 0;
        let total = 0;
        entries.map((entry) => {
            if (entry.isExpense) {
                return (totalExpenses += entry.value)
            }
            return (totalIncomes += entry.value)
        });
        total = totalIncomes - totalExpenses;
        setTotal(total);
        setIncomeTotal(totalIncomes);
        setExpenseTotal(totalExpenses);
        console.log(`Total incomes are: ${totalIncomes} and total expenses are: ${totalExpenses}`)
    }, [entries])

    const deleteEntry = (id: string | number) => {
        const result = entries.filter(entry => entry.id != id);
        setEntries(result);
    }

    const addEntry = (newEntry: INewEntry) => {
        console.log(newEntry)
        setEntries(prevState => ([
            ...prevState, {
                id: prevState.length,
                ...newEntry
            }
        ]))
    }

    const editEntry = (id: string) => {
        if (id) {
            const index = entries.findIndex(entry => entry.id == id);
            const entry = entries[index];
            setNewEntry(entry);
            setEntryId(id);
            setIsOpen(true)
        }
    }

    const updateEntry = () => {
        if (!entryId) return;

        const index = entries.findIndex(entry => entry.id == entryId);
        const newEntries = [...entries];

        newEntries[index].value = newEntry.value;
        newEntries[index].isExpense = newEntry.isExpense;
        newEntries[index].description = newEntry.description;

        setEntries(newEntries);
        setNewEntry({description: "", isExpense: false, value: 0})
        setIsOpen(false);
    }

    return (
        <Container>
            <MainHeader title="Budget"/>
            <DisplayBalance
                size="small"
                label="Your Balance"
                value={total}
            />

            <DisplayBalances totalExpense={expenseTotal} totalIncome={incomeTotal}/>

            <MainHeader title="History" type="h3"/>
            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
                setIsOpen={setIsOpen}
            />

            <MainHeader title="Add new transaction" type="h3"/>
            <NewEntryForm
                newEntry={newEntry}
                setNewEntry={setNewEntry}
                addEntry={addEntry}
            />

            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setNewEntry={setNewEntry}
                newEntry={newEntry}
                updateEntry={updateEntry}
            />
        </Container>
    )
}

var initialEntries: IEntry[] = [
    {
        id: 0,
        value: 1000,
        isExpense: false,
        description: "Work Income"
    },
    {
        id: 1,
        value: 200,
        isExpense: true,
        description: "Water BIll"
    },
    {
        id: 2,
        value: 300,
        isExpense: true,
        description: "Rent"
    },
    {
        id: 3,
        value: 50,
        isExpense: true,
        description: "Power Bill"
    },
]

export default App
