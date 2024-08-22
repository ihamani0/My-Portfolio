import { createStore } from "vuex";


import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const store =  createStore({
    state(){
        return {
            MyDetails :{},
        }
    } ,
    mutations,
    actions,
    getters 
});
export default store ;