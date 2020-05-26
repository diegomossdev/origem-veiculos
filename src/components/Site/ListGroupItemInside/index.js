import React from 'react'
import PropTypes from 'prop-types'

export default function ListGroupItemInside({name, subName}) {
  return (
    <>
      <div className="list-group-item-inside l4 text-transoform-uppercase">
        <span>{name}</span>
      </div>
      <div className="list-group-item-inside l8 text-transoform-uppercase">
        {subName}
      </div>
    </>
  )
}


ListGroupItemInside.propTypes = {
  name: PropTypes.string,
  subName: PropTypes.string,
}

ListGroupItemInside.defaultProps = {
  name: '',
  subName: '',
}
