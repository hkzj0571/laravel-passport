/**
 * Created by huke on 2017/12/5.
 */

export  default {
    setToken(token){
        window.localStorage.setItem('jwt_token',token);
    },
    getToken(token){
        return window.localStorage.getItem('jwt_token');
    },
    removeToken(token){
        window.localStorage.removeItem('jwt_token');
    }
}

