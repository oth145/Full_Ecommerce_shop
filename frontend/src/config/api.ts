import axios from "axios";

export const Categories = async () => {
try {
const res = await axios.get('http://localhost:8800/api/signin')
    console.log(res.data)
    return res.data;
} catch (error) {
    console.log('Sign-in failed:', error)
}
}