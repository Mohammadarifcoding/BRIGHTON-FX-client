import axios from 'axios';

const axiousInstace = axios.create({
    baseURL:'http://92.205.236.41:7000'
})
// http://92.205.236.41:7000/admincheck/nabirasek@gmail.com
const UseAxious = () => {
    return axiousInstace
};

export default UseAxious;