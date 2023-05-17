import React from "react";
import './main.global.css'
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CardsList } from "./components/CardsList";
import { assignId, generateId, generateRandomString } from "../utils/react/generateRandomIndex";
import { Dropdown } from "./components/Dropdown";
// import { MyList } from "./components/GenericList";



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
                    <div style={{ padding: 20}}>
                        <br />
                        <Dropdown 
                            onClose={() => console.log('closed')} 
                            onOpen={() => console.log('opened')} 
                            isOpen={false}
                            button={<button>Test</button>}
                        >
                          <CardsList/> 
                        </Dropdown> 
                    </div>
                </Content>
               
            </Layout>
        </div>
    )
}

export default App