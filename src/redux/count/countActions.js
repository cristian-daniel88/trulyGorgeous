export const COUNTPLUS = "COUNTPLUS"; 
export const COUNTLESS = "COUNTLESS";
export const COUNTPUT = "COUNTPUT"
 

export const countPlus = () => ({
  type: COUNTPLUS,
  
});


export const countLess = () => ({
    type: COUNTLESS,
    
});


export const countPut = (value) => ({
  type: COUNTPUT,
  payload: value
})


