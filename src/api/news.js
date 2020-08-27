import axios from 'axios';

const _url = 'http://js-post-api.herokuapp.com/api/posts?';

export const fetchnewsdata = async (string) => {
    try {
        const { data } = await axios.get(_url + string);
        return data;
    } catch (error) {
        console.log(error);
    }
}