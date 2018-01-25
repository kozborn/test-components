import React from 'react'
import { string, func, bool, instanceOf } from 'prop-types'
import Immutable from 'immutable'
import classnames from 'classnames'
import EtdRadioWithLabel from './EtdRadioWithLabel'

const EtdJudgement = ({
    name,
    editable,
    additionalOptions,
    selectedOption,
    options,
    onChange,
    className,
    sectionId,
}) => {
  const classes = classnames('etd-components__judgement-fieldset', className)
  return (
    <fieldset name={name} disabled={!editable} className={classes}>
      {options.map((option) => {
        return <EtdRadioWithLabel
          key={option.get('value')}
          onChange={onChange}
          option={option}
          sectionId={sectionId}
          selectedOption={selectedOption}
        />
      }).toList()}
      {!additionalOptions.isEmpty() && <hr/>}
      {additionalOptions.map((option) => {
        return <EtdRadioWithLabel
          key={option.get('value')}
          onChange={onChange}
          option={option}
          sectionId={sectionId}
          selectedOption={selectedOption}
        />
      }).toList()}
    </fieldset>
  )
}

EtdJudgement.propTypes = {
  additionalOptions: instanceOf(Immutable.Map),
  className: string,
  editable: bool,
  name: string.isRequired,
  onChange: func,
  options: instanceOf(Immutable.Map).isRequired,
  sectionId: string.isRequired,
  selectedOption: string,
}

export default EtdJudgement
