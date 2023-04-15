import axios from 'axios'

export const BASE_URL = 'https://localhost:7000/';

export const ENDPOINTS = {
    participant: 'Participants',
    question:'questions',
    getAnswers : 'questions/getanswers'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id),
    }
}