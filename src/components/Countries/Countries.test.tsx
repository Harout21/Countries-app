import * as React from "react";
import {render} from "@testing-library/react";
import TableData from "./Table";

const data = [{
    name: "United States",
    code: "US",
}];


describe(TableData, () => {

    it('should render table title', function () {
        const {getByText} = render(<TableData filterData={data}/>);
        expect(getByText(/Country Name/i)).toBeInTheDocument();
        expect(getByText(/Country Code/i)).toBeInTheDocument();
    });

    it('table has data', function () {
        const {getByText} = render(<TableData filterData={data}/>);
        expect(getByText(/US/i)).toBeInTheDocument();
        expect(getByText(/United States/i)).toBeInTheDocument();
    });

    it('Failed case: table has data', function () {
        const {getByText} = render(<TableData filterData={data}/>);
        expect(getByText(/ABC/i)).toBeInTheDocument();
        expect(getByText(/CDE/i)).toBeInTheDocument();
    });

});

