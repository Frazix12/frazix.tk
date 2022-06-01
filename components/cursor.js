import react from 'react'

const Cursor = () => {
  const cursorref = react.useRef(null)
  react.useEffect(() => {
    document.addEventListener('mousemove', event => {
      const { x, y } = event
      const mouseX = x - cursorref.current.clientWidth / 2
      const mouseY = y - cursorref.current.clientHeight / 2
      cursorref.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  })
  return <div className="cursor" ref={cursorref}></div>
}

export default Cursor
