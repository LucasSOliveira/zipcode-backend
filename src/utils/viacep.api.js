import axios from 'axios'

const api = axios.create({
    baseURL: 'https://viacep.com.br/', 
    responseType: 'json'
})

export default async (params) => {
    let data
    await api.get(`/ws/${params}/json/`)
    .then(response => {
        data = response.data
    })
    return data
}
