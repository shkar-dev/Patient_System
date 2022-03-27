import React from 'react'

function Modal(props) {
    const onClickHandler = ()=>{
        props.Verify(true);
    }
  return (
    <div class="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{props.Title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {props.Content}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close <i class="fa fa-close mx-2"></i></button>
                    <button type="button" class="btn bg-gradient-primary" data-bs-dismiss="modal" onClick={onClickHandler}>Save changes <i class="fa fa-save mx-2"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal