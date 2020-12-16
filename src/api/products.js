import axios from 'axios';

const _url = 'https://api.lioflower.com/api/product/search?order=desc&order_by=id&limit=20&page=1&category_id=';

export const fetchProductData = async () => {
    try {
        const data = await axios.get(_url);
        return data.data.data.item;
    } catch (error) {
        
        console.log(error);
    }
}