import axios from 'axios';

const axiousInstace = axios.create({
    baseURL:'https://brighton-fx-server.vercel.app'
})

const UseAxious = () => {
    return axiousInstace
};

export default UseAxious;