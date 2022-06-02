import MenuBar from './MenuBar'
import { useState } from 'react'
import getItems from './items'

function MenuBarWrapper (props) {
  const [items, setItems] = useState(getItems())

  const onHandleClick = d => {
    items.forEach(b => (b.active = false))
    d.active = true
    setItems([...items])
  }

  return (
    <div>
      <MenuBar handleClick={onHandleClick} items={items} />
    </div>
  )
}

export default MenuBarWrapper