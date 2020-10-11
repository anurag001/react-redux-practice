const reducer = (state = [], action) => {
    switch (action.type) {
       case 'ADD': 
         return [...state,{title:action.textObject.title,description:action.textObject.description}];
       case 'REMOVE':  
         const mutableList = [...state];
         mutableList.splice(action.index,1);
         return mutableList;
       default: return state;
    }
 }
 export default reducer;