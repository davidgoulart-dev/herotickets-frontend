
'use client'
import { useState } from "react"
import { Input } from "./Input"
import axios from "axios"

const AutoComplete = () => {
    const [suggestions, setSuggestions] = useState([])
    const [inputValue, setInputValue] = useState('')
   const handleChangeInput = async (value) => {
    setInputValue(value)
    const fetchSuggestions = await axios.get(`/api?input=${value}`, {method: 'GET'})
    const data = await fetchSuggestions
    setSuggestions(fetchSuggestions.data.predictions)
      
    

    }
    const handleSelect = (address)=>{
        setInputValue(address.description)
        setSuggestions([])
    }
    return (
        <>
        <Input onChange={(e)=>handleChangeInput(e.target.value)} title="Localização" value={inputValue} placeholder="Endereço" type="input" />
        <ul className=" rounded bg-white shadow">{suggestions.map((suggestion: any)=>(
            <li className=" p-2 cursor-pointer hover:bg-gray-100" onClick={() =>handleSelect(suggestion)}>{suggestion.description}</li>
        ))}</ul>
        </>

    )
}
export {AutoComplete}