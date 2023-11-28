import axios from 'axios';
const fetchData=async()=>{
    try{
        const response=await axios.get('http://localhost:3001/api/data');
        return response.data;
    } catch (error){
        throw error;
    }
};
export {fetchData};