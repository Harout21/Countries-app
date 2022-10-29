import React from 'react';
import {CountryType, TableDataProps} from "../../Types";

import {StyledTable} from "../../styles/Table.styled";

const TableData = ({filterData}: TableDataProps) => {
    return (
        <StyledTable>
            <div>
                <div>
                    <p>Country Name</p>
                    <p>Country Code</p>
                </div>
            </div>

            <div>

                {filterData.map((item: CountryType) => {
                    return (
                        <div key={item.code}>
                            <p>{item.name}</p>
                            <p>{item.code}</p>
                        </div>
                    )
                })}

            </div>

        </StyledTable>
    );
};

export default TableData;