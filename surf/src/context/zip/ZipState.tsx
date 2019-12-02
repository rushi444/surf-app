import React, { useReducer } from 'react';
import zipContext from './zipContext';
import zipReducer from './zipReducer';
import { GET_COUNTY } from '../types';

const Zipstate = props => {
    const initialState = {
        zipCode: null
    } 

    const [state, dispatch] = useReducer(zipReducer, initialState); 

    const getZip = async () => {
        return
    }
}
