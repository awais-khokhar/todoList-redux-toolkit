import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

export const todoSlicer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: Math.floor(100000 + Math.random() * 900000),
        content: action.payload.newContent,
        priority: action.payload.priority ? action.payload.priority : 'normal',
      };
      state.todoList.push(newTodo);
    },

    deleteTodo: (state, action) => {
      let {todoList} = state;
      state.todoList = todoList.filter(item => item.id !== action.payload.id);
    },

    editTodo: (state, action) => {
      let {todoList} = state;
      state.todoList = todoList.map(item =>
        item.id == action.payload.id ? action.payload : item,
      );
    },
  },
});

export const {addTodo, deleteTodo, editTodo} = todoSlicer.actions;
export default todoSlicer.reducer;
