export const setLanguage = (state, newLanguage) => {
    state.language = newLanguage;
}

export const initialiseStore = (state) => {
    if(localStorage.getItem('language')) {
        state.language = localStorage.getItem('language');
    }
}