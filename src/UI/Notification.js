import React from 'react'

function Notification(props) {
  return (
    <div class="alert alert-secondary alert-dismissible fade show" role="alert">
        <span class="alert-icon mx-2"><i class="fa fa-warning "></i></span>
        <span class="alert-text">{props.Title}</span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
  )
}

export default Notification