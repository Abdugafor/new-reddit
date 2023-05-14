import React from "react";
import './main.global.css'
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList";
import { assignId, generateId, generateRandomString } from "../utils/react/generateRandomIndex";
import { GenericList } from "./components/GenericList";
import { merge } from "../utils/js/merge";


const LIST = [
    {text: 'Some'},
    {text: 'some2'},
    {text: 'Some'},
].map(generateId)

function App() {

    const [list, setList] = React.useState(LIST)

    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id !== id))
    }

    const handleAdd = () => {
        setList(list.concat(generateId({ text: generateRandomString() })))
    }

    return (
        <div>
            <Layout>
                <Header/>
                <Content>
                    <CardsList/> 
                    <button onClick={handleAdd}>Add item</button>
                    <GenericList list={list.map(merge({onClick: handleItemClick})) }/>
                </Content>
            </Layout>
        </div>
    )
}

export default App