// rafce : 단축키

import React from 'react'

const Box = (props) => {
    console.log("props", props)
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {/* 상황에 맞춰서 에러를 방지하기 위해 조건을 써줘야함 */}
      <img className="item-img" alt="item-image" src={props.item && props.item.img}/>
      <h2>WIN</h2>
    </div>
  )
}

export default Box
