import axios from 'axios';

export function loadGitData(language = 'all') {
    return(dispatch) => {
        return axios.get(`https://api.github.com/search/repositories?q=${language}+language:${language}&sort=name&order=desc&type=Repositories`)
            .then((response)=>{
                dispatch(getData(response.data));
            })
            .catch((error)=>{
                // let message = 'Could not load data';
                // dispatch(noData(message));
                console.log('Could not load data');
            });
    }
}

export function getData(data) {
    return {
        type: 'GET_DATA',
        gitData: data
    }
}
export function selectLanguage(language='All') {
    return {
        type: 'SELECT_LANGUAGE',
        language: language
    }

}
export function selectPage(page) {
    return {
        type: 'SELECT_PAGE',
        page: page
    }

}
export function searchData(value) {
    return {
        type: 'SEARCH_DATA',
        value: value
    }

}

export function changeLang(lang) {
    return {
        type: 'CHANGE_LANG',
        lang: lang
    }

}