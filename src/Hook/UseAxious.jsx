import axios from 'axios';

const axiousInstace = axios.create({
    baseURL:'http://92.205.236.41:3000'
})

const UseAxious = () => {
    return axiousInstace
};

export default UseAxious;