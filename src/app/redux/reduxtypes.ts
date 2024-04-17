import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Valore {
    data:string
    categoria: string;
    titulo: string;
    valor: number;
}

interface TodoState {
    todos:Valore[];
}

const initialState: TodoState = {
    todos: []
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAfazer: (state, action) => {
            state.todos.push(action.payload)
            
        },  
    }
});

export const { setAfazer } = slice.actions;
export default slice.reducer;
