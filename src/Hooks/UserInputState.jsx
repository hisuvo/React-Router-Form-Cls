import { useState } from "react"

const UseIntputState = (defaultValue = null) => {

    const [value, setValue] = useState(defaultValue)

    /** for Array */
    // const handleChange = e => {
    //     setValue(e.target.value)
    // }

    // return [value, handleChange]

    /** For Object */
    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}

export default UseIntputState