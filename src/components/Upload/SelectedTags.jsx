import React from 'react'

function SelectedTags({selected}) {
  return (
    <div>
        {selected && selected.map(tag => <span key={tag}>{tag}</span>)}
    </div>
  )
}

export default SelectedTags