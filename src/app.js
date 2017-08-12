import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './conf'
import Button from './components/Button'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()


const App = function()
{
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Button >Karl</Button>
            </Provider>
        </MuiThemeProvider>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
