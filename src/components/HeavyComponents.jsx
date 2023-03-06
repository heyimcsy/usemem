import React, { useState } from 'react'

function HeavyComponents() {
  const [count, setCount] = useState(0)

  const heavtWork = () => {
    for (let i = 0; i < 100000000000; i++) {}
    return 100
  }
  return (
    <>
      <p>very heavy components</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        누르면 아래 count 가 올라가요!
      </button>
      <br />
      {count}
    </>
  )
}

export default HeavyComponents
