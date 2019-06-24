import axios from "axios"
import qs from "qs"
import { Toast } from 'mint-ui'

const service = axios.create({
	baseURL: process.env.BASE_URL,
  timeout: 5000
})

service.interceptors.response.use(   
  (response) => {   
		return Promise.resolve(response)
  },    
  (error) => {       
    return Promise.resolve(error.response)
  }
)

export default service