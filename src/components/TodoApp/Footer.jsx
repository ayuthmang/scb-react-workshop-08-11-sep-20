import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

function Footer({ visibilityFilter, onFilterClick }) {
  return (
    <div>
      <p>
        Show:{' '}
        <Link
          active={visibilityFilter === 'all'}
          onClick={() => onFilterClick('all')}
        >
          All
        </Link>{' '}
        |{' '}
        <Link
          active={visibilityFilter === 'completed'}
          onClick={() => onFilterClick('completed')}
        >
          Completed
        </Link>{' '}
        |{' '}
        <Link
          active={visibilityFilter === 'acitve'}
          onClick={() => onFilterClick('active')}
        >
          Active
        </Link>
      </p>
    </div>
  )
}

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
}

export default Footer
