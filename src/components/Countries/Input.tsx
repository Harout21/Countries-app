import React from 'react';
import {InputProps} from "../../Types";

import {StyledInput} from "../../styles/Input.styled";


const Input = ({inputValue, setInputValue, placeholder}: InputProps) => {
    return (
        <StyledInput
            placeholder={placeholder}
            value={inputValue}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setInputValue(e.target.value)}
        />
    );
};

export default Input;