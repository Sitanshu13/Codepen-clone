import { useState, useEffect } from 'react'

const PREFIX = 'codepen-clone-'

function useLocalStorage(key, intitialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)

        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof intitialValue === 'function'){
            return intitialValue()
        } else {
            return intitialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey ,value])

    return [value, setValue]
}

export default useLocalStorage
