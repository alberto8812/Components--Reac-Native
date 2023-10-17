import React, { useState } from 'react'

export const useFormText =<T extends Object> (form :T) => {
  
const [state, setState] = useState(form)

    const onChange=<k extends Object>(value:k,field:string)=>{//<T extends Object> usada para el controld e objeto

        setState({
            ...form,
            [field]:value
            })

    }



  return {
    ...state,
    form: state,
    onChange,
  }
}
