import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: false,
    },
    reducers: {
        setStartLoading: (state, action) => {
            state.loading = true;
        },
        setFinishLoading: (state, action) => {
            state.loading = false;
        },
    },
});
export const { setStartLoading, setFinishLoading } = uiSlice.actions;

export default uiSlice.reducer;

export const startLoading = () => {
    return async (dispatch) => {
        dispatch(setStartLoading());
    };
};

export const finishLoading = (id) => {
    return async (dispatch) => {
        dispatch(setFinishLoading());
    };
};
