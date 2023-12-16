import React from 'react'
import {useRouteError} from 'react-router-dom'
function PageNotFound() {
    const err= useRouteError();
    console.log(err.status)
  return (
    <div>
      <h1>page not found</h1>
       <h2>{err.status}  {err.statusText}</h2>
    </div>
  )
}

export default PageNotFound
