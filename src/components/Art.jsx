import React from 'react'
import { useParams } from 'react-router-dom'

function Art() {
    let {id} = useParams()
  return (
    <div>
      Art {id}
    </div>
  )
}

export default Art
