import React from 'react'
import PropTypes from 'prop-types'

function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  )
}
Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}

export default Link
