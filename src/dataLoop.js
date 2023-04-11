import React from 'react'

export const DataLoop = ( {todo, checkBox}) => {
    function changeCheckbox(){
        checkBox(todo.id)
    }

    return (
        <div>
            <input type="checkbox" checked={todo.isComplete} onChange={changeCheckbox}/>
            { todo.name }
        </div>
    )
}
