import axios from "axios";

export async function UserService () {
    try{
        const response = await axios.get('http://localhost:8000/user/data');
        console.log('response  ', response.data)
        return response.data;
    }catch(error) {
        return [];
    }
}

