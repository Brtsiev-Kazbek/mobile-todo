const initialState = {tasks: [
  {
    id: 0, title: 'Оп, я в редаксе', completed: true
  },
  {
    id: 1, title: 'Оп, я в реакт-редаксе', completed: false
  }
]};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD-TASK':
    return {...state.tasks, ...action.payload};
  default:
    return state;
  }
};

export default reducer;