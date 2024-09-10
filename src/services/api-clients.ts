import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6b7cf902b1934d3987d8a79e238474ec'
    }
})