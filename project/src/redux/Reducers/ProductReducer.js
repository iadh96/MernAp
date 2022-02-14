
const {GET_PRODUCTS, MY_PRODUCTS} = require("../Authtypes");


const initialState ={
    products: [],
    myproducts: [],
    product : {},
};
const ProductReducer= (state = initialState, {payload,type}) =>{
    switch (type) {
     case GET_PRODUCTS :
         return {...state, products: payload.Products};
         case MY_PRODUCTS:
             return {...state, myproducts: payload.myproducts};

             default : return state;
    }
    };

    export default ProductReducer


