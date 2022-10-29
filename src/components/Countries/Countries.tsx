import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {countriesData, fetchedData} from "../../features/fetchCountriesData/fetchCountriesDataSlice";

import Input from "./Input";
import TableData from "./Table";

import {StyledTableWrapper} from "../../styles/Table.styled";
import {StyledContainer} from "../../styles/Container.styled";
import {StyledInputWrapper} from "../../styles/InputWrapper.styled";
import {StyledErrorMessage} from "../../styles/ErrorMessage.styled";

const Countries = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const dispatch = useAppDispatch();
    const countriesFetchData = useAppSelector(fetchedData);

    const filterData = countriesFetchData.countries.filter(
        (item: { code: string }) => inputValue && item.code.includes(inputValue.toUpperCase())
    );

    useEffect(() => {
        if (!countriesFetchData.countries.length) {
            dispatch(countriesData())
        }
    }, [countriesFetchData.countries.length, dispatch]);


    return (
        <StyledContainer>

            <StyledInputWrapper>
                <Input
                    placeholder="Enter country code to filter"
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                />
            </StyledInputWrapper>

            <StyledTableWrapper>
                <div>
                    <TableData filterData={filterData}/>
                </div>

                    {
                        !filterData.length && inputValue.length > 1 &&
                        <StyledErrorMessage>
                            Data not found, Enter a valid country code
                        </StyledErrorMessage>
                    }

            </StyledTableWrapper>

        </StyledContainer>
    );
};

export default Countries;