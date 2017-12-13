const initState = {
    projects: {},
    data: {},
    activeLanguage: 'All',
    languages: ['All', 'JavaScript', 'React', 'Angular', 'Vue', 'JQuery'],
    activePage: 1,
    lang: 'en'
};

const peopleReducer = (state = initState, action) => {
    if(action.type === 'GET_DATA') {
        let sortedData = action.gitData.items;
        sortedData.sort(function (a, b) {
            return a.name > b.name
        });
        return {
            ...state,
            data: sortedData,
            projects: sortedData,
            activePage: 1
        }
    } else if (action.type === 'SELECT_LANGUAGE') {
        return {
            ...state,
            activeLanguage: action.language
        }
    } else if (action.type === 'SELECT_PAGE') {
        return {
            ...state,
            activePage: action.page
        }
    } else if (action.type === 'CHANGE_LANG') {
        return {
            ...state,
            lang: action.lang
        }
    }  else if (action.type === 'SEARCH_DATA') {
        let newData = state.projects.slice().filter(function (el) {
            let searchTitleValue = el.name.toLowerCase();
            return searchTitleValue.indexOf(action.value.toLowerCase()) !== -1;
        });
        return {
            ...state,
            data: newData
        }
    }
    return state
};

export default peopleReducer;