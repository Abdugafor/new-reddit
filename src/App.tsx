import React from "react";
import './main.global.css'
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList";
import { assignId, generateId, generateRandomString } from "../utils/react/generateRandomIndex";
import { MyList } from "./components/GenericList";


const LIST = [
    {value: 'Some'},
    {value: 'some2'},
    {value: 'Some'},
].map(generateId)

function App() {
    return (
        <div>
            <Layout>
                <Header/>
                <Content>
                    <CardsList/> 
                    <MyList list={LIST.map((item) => ({...item , onClick: () => { console.log(item.id) } }))}/>
                </Content>
            </Layout>
        </div>
    )
}

export default App