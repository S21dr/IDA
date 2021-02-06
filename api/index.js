import axios from "axios";

export const baseURL = 'https://frontend-test.idaproject.com'

const instance = axios.create({
  baseURL:`${baseURL}/api/`,
});

export const catalog = {
  getCategoryList() {
    return instance.get('product-category')
  },
  getCategoryItems(id) {
    return instance.get(`product?category=${id}`)
  }
}
