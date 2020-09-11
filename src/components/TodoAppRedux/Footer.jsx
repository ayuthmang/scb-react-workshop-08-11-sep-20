import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from './store/visibilityFilter/action'

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
          active={visibilityFilter === 'active'}
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

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter,
})
const mapDispatchToProps = (dispatch) => ({
  onFilterClick: (filter) => dispatch(setVisibilityFilter(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
