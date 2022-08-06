import create from 'zustand'

 export const useStore= create(
    (set)=>({
        cart:{
            pizza:[]
        },

        addPizza:(data)=>
        set((state) => ({
            cart:{
                pizza:[...state.cart.pizza,data]
            }
        })),
        //remove pizza
       removePizza:(index)=>
       set((state)=>({
        cart:{
            pizza:state.cart.pizza.filter((_,i)=> i!=index)
        }
       })),
       resetCart:()=>
       set(()=>({
        cart:{
            pizza:[]
        }

       }

       ))
    })
 )