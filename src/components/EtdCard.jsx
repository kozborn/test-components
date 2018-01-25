import React from 'react'
import classnames from 'classnames'
import { node, string } from 'prop-types'

const EtdCard = ({ children, className }) => {
  return (
    <div className={classnames('etd-components__card', className)}>
      {children}
    </div>
  )
}

EtdCard.propTypes = {
  children: node.isRequired,
  className: string,
}

export default EtdCard
