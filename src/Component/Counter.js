import React, { useState } from 'react';


function Counter(){
    const [count, setCount] = useState(0)
    //console.log(useState(0));
    return(
        <div>
            <h1>{count}</h1>
            <h1 onClick={()=>setCount(count+1)}>
              <button> submission</button>
            </h1>
            
            <h1 onClick={()=>setCount(count-1)}>
              <button> remove</button>
            </h1>

        </div>
    )
}
export default Counter;