import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {

  const error = useRouteError()

  return (
    <div className='vh-100 justify-content-center d-flex align-items-center '>     
      <h1>{error.statusText || error.message}</h1>
    </div>
  )
}
