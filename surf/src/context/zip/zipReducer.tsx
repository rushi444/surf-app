import { GET_COUNTY } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTY:
      return { ...state, zipCode: action.payload };
  }
};
