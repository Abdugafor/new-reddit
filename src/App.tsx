import React from "react";
import './main.global.css'
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList";
import { assignId, generateId, generateRandomString } from "../utils/react/generateRandomIndex";
import { MyList } from "./components/GenericList";
import { Dropdown } from "./components/Dropdown";


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
                    <div style={{ padding: 20}}>
                        <Dropdown button={<button>Test</button>}>
                            <ul>
                                <li onClick={console.log}>Click me</li>
                                <li>Dont click me</li>
                            </ul>
                        </Dropdown> 
                    </div>
                </Content>
               
            </Layout>
        </div>
    )
}

export default App