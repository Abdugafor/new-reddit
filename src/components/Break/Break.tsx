import React from 'react';
import styles from './break.css';
import classNames = require('classnames');

type TBreakSize = 4 | 8 | 12 | 16  | 20
type TDisplays = 'mobille' | 'tablet' | 'desktop'

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size, 
    mobileSize, 
    desktopSize, 
    tabletSize
  } = props

  return ( 
    <div 
        className={classNames(
          styles[`s${size}`],
          { [styles[`mobile_s${mobileSize}`]]: mobileSize },
          { [styles[`tablet_s${tabletSize}`]]: tabletSize },
          { [styles[`desktop${desktopSize}`]]: desktopSize },
          {[styles.inline]: inline},
          {[styles.top]: top}
        )}
    />
  );
}

