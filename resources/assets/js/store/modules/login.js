/**
 * Created by 89776 on 2017/12/6.
 */
import jwtToken from './../../helpers/jwt'

export default {
    actions: {
        loginRequest({dispatch}, formData) {
            axios.post('/api/login', formData).then(response => {
                jwtToken.setToken(response.data.token)
               dispatch('setAuthUser')
            }).catch(error => {
                console.log(error.response.data)
            })
        }
    }
}
