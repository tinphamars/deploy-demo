import axios from 'axios';

const _url = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';

export const fetchnewsdata = async () => {
    try {
        const { data } = await axios.get(_url, {
            credentials: "include"
        });
        return data.articles;
    } catch (error) {
        console.log(error);
    }
}