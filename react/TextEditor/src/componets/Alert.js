import React, { useState } from 'react'

export default function Alert(prop) {
    
  return (
    prop.alert && <div>
   <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{prop.alert.type}:</strong>{prop.alert.messeage}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  </div>

  )
}
