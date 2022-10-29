import React from "react";

export interface CountriesState {
    countries: [];
}

export interface CountryType {
    name: string,
    code: string,
}

export interface InputProps {
    inputValue: string,
    placeholder: string,
    setInputValue: (value: React.SetStateAction<string>) => void,
}

export interface TableDataProps {
    filterData: CountryType[],
}

