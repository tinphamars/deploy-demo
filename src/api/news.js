import axios from 'axios';

const _url = 'http://newsapi.org/v2/everything?q=corona&from=2020-08-25&sortBy=publishedAt&apiKey=c84d54c780c74f9fbd3b3ddd6532976d';
const _service = 'http://tyn-ars.herokuapp.com/';
export const fetchnewsdata = async () => {
    try {
        const { data } = await axios.get(_url, _service);
        return data.articles;
    } catch (error) {
        console.log(error);
    }
}