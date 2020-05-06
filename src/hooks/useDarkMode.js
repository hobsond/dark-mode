import {useState,useEffect} from 'react'

import useLocalStorage from './useLocalStorage'
import useLocalStorge from './useLocalStorage'

const useDarkMode = (initial)=>{
    const [storedValue, setValue]= useLocalStorge('dark-mode',initial)
    useEffect(()=>{
        storedValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    },[storedValue])
    return [storedValue,setValue]
}

export default useDarkMode