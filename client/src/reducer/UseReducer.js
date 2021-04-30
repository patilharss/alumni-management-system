
export const initialState=false;
//try toggleing this true/false sometimes it malfunctions.. dont know why


export const reducer=(state,action)=>{
    if (action.type==="USER"){
        return action.payload;
        }
    return state;
}
