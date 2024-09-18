export default {
    async loadDetails(context){
        const response = await 
        fetch("https://my-portfolio-ihamani0-default-rtdb.europe-west1.firebasedatabase.app/Deatils.json")
    
        const responseData = await response.json();

        if(!response.ok){
            throw new Error(responseData.message)
        }

        context.commit("setDeatils" , responseData)
        context.commit("SET_DATA_LOADED" , true)
    }
}