export const initialState = {
    questions:[{questionText: "Pregunta", questionType:"radio", options : [{optionText: "Opción 1"}], open: true, required:false}],
    questionType:"radio",
    doc_name:"Sin título ",
    doc_desc:" Añade una descripción "


}

export const actionTypes = {
      SET_QUESTIONs:"SET_QUESTIONS",
      CHANGE_TYPE:"CHANGE_TYPE",
      SET_DOC_NAME:"SET_DOC_NAME",
      SET_DOC_DESC:"SET_DOC_DESC"
      
}

const reducer = (state=initialState, action)=>{
    console.log(action);
    
    switch(action.type){
        case actionTypes.SET_QUESTION : 
            return {
                ...state, questions:action.questions,
            };
        case actionTypes.CHANGE_TYPE : 
            return {
                ...state, questionType:action.questionType,
            }; 
        case actionTypes.SET_DOC_NAME : 
            return {
                ...state, doc_name:action.doc_name,
            };
            
        case actionTypes.SET_DOC_DESC: 
            return {
                ...state, doc_desc:action.doc_desc,
            };     
        default:
            return state;    
    }
}

export default reducer;