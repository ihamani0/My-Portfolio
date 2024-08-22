export default {
    getDetails(state){
        return state.MyDetails;
    },
    getDescription(state){
        return state.MyDetails.Description;
    },
    getEmail(state){
        return state.MyDetails.Email;
    },
    getFullName(state){
        return state.MyDetails.FirstName +" "+ state.MyDetails.LastName;
    },
    getCvLink(state){
        return state.MyDetails.LinkCv;
    },
    getCvLink(state){
        return state.MyDetails.ProfilImg;
    },
}