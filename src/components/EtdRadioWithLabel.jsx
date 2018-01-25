import React from 'react'
import { string, func, instanceOf } from 'prop-types'

const EtdRadioWithLabel = ({ option, onChange, selectedOption, sectionId }) => {
  const key = `${sectionId}-${option.get('value')}`
  return (
    <label htmlFor={key}>
      <input
        id={key}
        type="radio"
        value={option.get('value')}
        checked={option.get('value') === selectedOption}
        onChange={onChange}
      />
      <span className="criteria-option-label">{option.get('text')}</span>
    </label>
  )
}

EtdRadioWithLabel.propTypes = {
  option: instanceOf(Immutable.Map).isRequired,
  selectedOption: string,
  sectionId: string.isRequired,
  onChange: func,
}

export default EtdRadioWithLabel
