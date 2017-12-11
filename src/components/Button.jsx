import * as React from 'react';

function Button({ label = "OK", action, param }) {
  return (
    <div className="bottom">
      <button onClick={() => action(param) }>
        {label}
      </button>
    </div>
  )
}

export default Button;