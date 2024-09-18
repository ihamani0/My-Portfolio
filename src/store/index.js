import { createStore } from "vuex";


import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const store =  createStore({
    state(){
        return {
            MyDetails :{},
            isLoaded : false,
        }
    } ,
    mutations,
    actions,
    getters 
});
export default store ;