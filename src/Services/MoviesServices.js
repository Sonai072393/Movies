import webApi from "../Services/WebApi/webApi"
import axios from "axios"

export const getMovies = async(onSuccess,onFailure)=>{
    try {
        console.log(webApi)

        const response = await axios.post(`${webApi}/get/moviesList`,{})

        if (response.status===201)
        {
            return onSuccess(response.data)
        }
    } catch (error) {
        console.log(error)
        return onFailure("Oops!!!! Something Went Wrong!!!")
    }
}