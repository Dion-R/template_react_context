const reducer = (state, action) => {
    if(action.type === "First")
    {
        console.log("Do first");
        return state;
    }
    if(action.type === "Second")
    {
        console.log("Do second");
        return state;
    }
    if(action.type === "Third")
    {
        console.log("Do third");
        return state;
    }
    if(action.type === "Fourth")
    {
        console.log("Do fourth");
        return state;
    }
    if(action.type === "Fith")
    {
        console.log("Do fith");
        return state;
    }
    if(action.type === "Sixth")
    {
        console.log("Do sixth");
        return state;
    }
    if(action.type === "Seventh")
    {
        console.log("Do seventh");
        return state;
    }
};

export default reducer;
