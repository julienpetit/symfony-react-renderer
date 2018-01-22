import React from 'react'
import ReactOnRails from 'react-on-rails'

// See documentation for https://github.com/reactjs/react-redux.
// This code here binds your smart component to the redux store.
const mainNode = (_initialProps, context) => {
    // const store = ReactOnRails.getStore('recipesStore')
    // const {location, base, serverSide} = context

    const reactComponent = (
        <div>
            react app
        </div>
    )
    return reactComponent
}

const App = mainNode;

ReactOnRails.register({ App })
