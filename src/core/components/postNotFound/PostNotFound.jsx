import React from 'react'
import { Link } from 'react-router-dom'

const PostNotFound = () => {
  return (
    <div className='postnotfound'>
        <h1>Post não encontrado!</h1>
        <Link to='/' className='link'>Voltar a página inicial</Link>
    </div>
  )
}

export default PostNotFound