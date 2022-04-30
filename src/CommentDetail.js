import React from 'react'

const CommentDetail = ({author,data,blogtext}) => {
  return (
    <div className='comment'>
    <a href='/' className='avatar'>
      <img alt="avatar"  src="https://mpng.subpng.com/20190123/jtv/kisspng-computer-icons-vector-graphics-person-portable-net-myada-baaranmy-teknik-servis-hizmetleri-5c48d5c2849149.051236271548277186543.jpg"/>
    </a>
    <div className='content'>
    <a href='/' className='author'>
      {author}
    </a>
    <div className='metadata'>
      <span className='data'>
         {data} 
      </span>
    </div>
    <div className='text'>{blogtext}</div>
    </div>
  </div>
  )
}

export default CommentDetail