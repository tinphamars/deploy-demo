import axios from 'axios';

const _url = 'https://api.lioflower.com/api/product/search?order=desc&order_by=id&limit=12&page=';

export const fetchProductData = async (page) => {
    try {
        const data = await axios.get(_url + page);
        return data.data.data.item;
    } catch (error) {
        
        console.log(error);
    }
}