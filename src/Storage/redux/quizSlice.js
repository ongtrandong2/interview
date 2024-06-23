
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  responses: {},
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setResponse: (state, action) => {
      const { questionId, response, scoreChange } = action.payload;
      state.responses[questionId] = response;
      state.score += scoreChange;
    },
    resetQuiz: (state) => {
      state.responses = {};
      state.score = 0;
    },
  },
});

export const { setResponse, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
