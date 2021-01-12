import { useState } from "react"

export const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    const reset = () => {
        setValues(initialValues);
    }

    return [values, handleInputChange, reset];
}
