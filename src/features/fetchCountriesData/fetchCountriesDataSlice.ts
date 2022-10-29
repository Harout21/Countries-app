import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {PayloadAction} from "@reduxjs/toolkit/dist/createAction";

import axios from "axios";
import {CountriesByCode} from "../../GRAPHQL_QUERIES/CountriesQuery";
import {CountriesState} from "../../Types";

const name = "countriesData";

const initialState: CountriesState = {
    countries: [],
};

export const countriesData = createAsyncThunk(
    name,
    async () => {
        return axios({
            url: process.env.REACT_APP_GRAPHQL_API,
            method: 'post',
            data: {
                query: CountriesByCode
            }
        }).then(res => res.data.data.countries)
    }
);

export const countriesSlice = createSlice({
    name,
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(countriesData.pending, (state) => {
                state.countries = []
            })
            .addCase(countriesData.fulfilled, (state, action: PayloadAction<[]>) => {
                state.countries = action.payload;
            })
            .addCase(countriesData.rejected, (state) => {
                state.countries = []
            });
    },
});

export const fetchedData = (state: RootState) => state.countries;

export default countriesSlice.reducer;
