/**
 *
 * BeerMug
 *
 */

import React, { memo } from 'react';
import { Glass, Beer, Handle, TopRight, TopLeft, FrontGlass } from './styles';

function BeerMug() {
  return (
    <Glass>
      <Beer />
      <Handle>
        <TopRight className="top-right" />
        <TopLeft className="bottom-right" />
      </Handle>
      <FrontGlass />
    </Glass>
  );
}

BeerMug.propTypes = {};

export default memo(BeerMug);
