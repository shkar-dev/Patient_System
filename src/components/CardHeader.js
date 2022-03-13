import React from 'react'

function CardHeader(props) {
    const title = props.title;
  return (
    <div class="card-header bg-white border-bottom  ">
        <h2 style={{textTransform:'uppercase'}}>{title}</h2>
    </div>
  )
}
export default CardHeader