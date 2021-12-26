export const setLanguage = (state, newLanguage) => {
    state.language = newLanguage;
}

export const setCurrentUserUID = (state, uid) => {
    state.currentUserUID = uid;
}

export const setCurrentUserRole = (state, role) => {
    state.currentUserRole = role;
}

export const initialiseStore = (state) => {
    if(localStorage.getItem('language')) {
        state.language = localStorage.getItem('language');
        state.currentUserUID = localStorage.getItem('currentUserUID');
        state.currentUserRole = localStorage.getItem('currentUserRole');
    }
}