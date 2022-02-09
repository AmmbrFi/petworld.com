import httpInstance from './axios'
const http = httpInstance()

export const nftCategory = () => http.get(`/categories`)
export const subCategory = category =>
  http.get(`/pets/${category}/subcategories`)

export const nftList = data => http.post('/pets/assets', data)
