export default {
    setDeatils(state , payload){
        state.MyDetails = payload;
    },
    SET_DATA_LOADED(state , payload){
        state.isLoaded = payload
    }
}