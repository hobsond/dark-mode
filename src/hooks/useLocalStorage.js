import {useState} from 'react'

const useLocalStorge = (key,initialValue) =>{
    const [storedValue,setStoredValue ] = useState(()=>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })
}
export default useLocalStorge