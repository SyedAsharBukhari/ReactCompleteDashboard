import React from 'react'

function Input ({style, type,placeholder}) {
  return (
    <div>
<input type={type} style={style} placeholder={placeholder}/>
    </div>
  )
}

export default Input