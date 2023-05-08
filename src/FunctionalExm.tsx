import React from "react";

function MyHook({title, id}: {title: string, id?: string}) {
    React.useEffect(() => {
        console.log('componentDidMount')   
        console.log('componentWillUpdate')   
    })

    React.useEffect(() => {
        console.log('componentDidMount')
        return () => { console.log('ComponentWillUpdate') }
    }, [])

    React.useEffect(() => {
        console.log('ComponentWillReceiveProps: ', title)
    }, [title])

    return (
        <div>{title} {id}</div>
    )
}