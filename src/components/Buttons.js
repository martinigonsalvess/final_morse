import ButtonLogic from './ButtonLogic'
import { useState } from 'react'

const letters = [
    ["a", ".-"], ["b", "-..."], ["c", "-.-."], ["d", "-.."],
    ["e", "."], ["f", "..-."], ["g", "--."], ["h", "...."],
    ["i", ".."], ["j", ".---"], ["k", "-.-"], ["l", ".-.."],
    ["m", "--"], ["n", "-."], ["o", "---"], ["p", ".--."],
    ["q", "--.-"], ["r", ".-."], ["s", "..."], ["t", "-"],
    ["u", "..-"], ["v", "...-"], ["w", ".--"], ["x", "-..-"],
    ["y", "-.--"], ["z", "--.."], ["1", ".----"], ["2", "..---"],
    ["3", "...--"], ["4", "....-"], ["5", "....."], ["6", "-...."],
    ["7", "--..."], ["8", "----."], ["9", "-----"]
    ]
    
const ShowButtons = () => {
    const [search, setSearch] = useState([]);

    const getValueFromChild = (valueFromChild) => {
        setSearch(valueFromChild)
        console.log("THIS IS SEARCH: " + search);
    }

    return (
        <>
            {letters.map((e) => (
                <ButtonLogic key={e} val={e} setSearch={setSearch} search={search} handlePassInfoToParent={getValueFromChild} />
            ))}
        </>
    )
}

export default ShowButtons