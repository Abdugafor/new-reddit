import React from "react";
import './main.global.css'
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList";

function App() {
    return (
        <div>
            <Layout>
                <Header/>
                <Content>
                    <CardsList/>
                </Content>
            </Layout>
        </div>
    )
}

export default App