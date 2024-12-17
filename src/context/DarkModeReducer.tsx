// src/context/DarkModeReducer.ts
export type DarkModeState = {
  darkMode: boolean;
};

export type DarkModeAction = {
  type: 'DARK' | 'LIGHT' | 'TOGGLE';
};

const darkModeReducer = (
  state: DarkModeState,
  action: DarkModeAction,
): DarkModeState => {
  switch (action.type) {
    case 'DARK':
      return { darkMode: true };
    case 'LIGHT':
      return { darkMode: false };
    case 'TOGGLE':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default darkModeReducer;
