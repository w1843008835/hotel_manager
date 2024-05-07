import axios from "../utils/request";
import md5 from "md5";

export const $login = async (params) => {
    params.password = md5(params.password)
    console.log(params.password)
    let { data } = await axios.get('/login', { params })
    console.log(data)
    return data
}