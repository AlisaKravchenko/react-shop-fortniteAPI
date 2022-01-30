import React from 'react'
import { ContextProvider } from './components/context'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Shop } from './components/Shop'

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    )
}

export default App
