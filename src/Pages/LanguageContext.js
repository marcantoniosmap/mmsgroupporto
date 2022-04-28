import { isWindow } from "jquery"
import React, {useContext, useState, useEffect} from "react"

const LanguageContext = React.createContext()

export function useLanguage(){
    return useContext(LanguageContext)
}

export function LanguageProvider({children}){
    const [isIndo,setIsIndo] =useState(true)

    function setWebLanguage(languageId){
        setIsIndo(languageId)
    }
    const value ={
        setWebLanguage,
        isIndo,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )

}