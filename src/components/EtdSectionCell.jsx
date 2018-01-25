import React from 'react';
import classnames from 'classnames';
import { string, number, node } from 'prop-types';

const EtdSectionCell = ({className, rowSpan, colSpan, children, cellTitle}) => {
  const classes = classnames('etd-components__cell', className)
  return (
    <td colSpan={colSpan} rowSpan={rowSpan} className={classes}>
      {cellTitle && <h2>{cellTitle}</h2>}
      <div className={'etd-components__cell__content'}>
        {children}
      </div>
    </td>
  );
}

EtdSectionCell.propTypes = {
  className: string,
  cellTitle: string,
  children: node.isRequired,
  colSpan: number,
  rowSpan: number,
}

EtdSectionCell.defaultProps = {
  className: "",
  rowSpan: 1,
  colSpan: 1,
}

export default EtdSectionCell;
