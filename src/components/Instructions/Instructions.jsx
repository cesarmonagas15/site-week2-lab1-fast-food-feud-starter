import "./Instructions.css"

export function Instructions({prop}) {
  return (
    <aside className="instructions">
      <p>{prop.instructions.start}</p>
    </aside>
  )
}

export default Instructions
