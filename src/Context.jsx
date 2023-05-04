import React, { useContext, useState } from "react"


const AppContext = React.createContext()

const AppProvider = ({ childern }) => {
    const [ismodel, setIsModel] = useState(false)
    const [isSidebar, setIsSidebar] = useState(false)

    const closeModel = () => {
        setIsModel(false)
    }
    const openModel = () => {
        setIsModel(true)
    }
    const closeSidebar = () => {
        setIsSidebar(false)
    }
    const openSidebar = () => {
        setIsSidebar(true)
    }


    return (
        <AppContext.Provider
            value={{ isSidebar, ismodel, closeModel, closeSidebar, openModel, openSidebar }}
        >
            {childern}
        </AppContext.Provider>
    )
}

// creating custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext)
    console.log();
}

export { AppContext, AppProvider }