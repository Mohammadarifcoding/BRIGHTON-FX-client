import axios from 'axios';

const axiousInstace = axios.create({
    baseURL:'http://localhost:3000'
})

const UseAxious = () => {
    return axiousInstace
};

export default UseAxious;