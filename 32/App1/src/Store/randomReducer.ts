const initialState: number[] = [];

export const randomReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GENERATE_RANDOM':
      { const newArray  = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 100)
      );
      return newArray; }
    default:
      return state;
  }
};