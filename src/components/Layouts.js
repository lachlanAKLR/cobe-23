import React from 'react';
import TitleContent from './TitleContent';
import ThreeColumn from './ThreeColumn';
import DropBlock from './DropBlock';
import PressRow from './PressRow';
import SingleImage from './SingleImage';
import TwoUpImage from './TwoUpImage';
import AccordionBlock from './AccordionBlock';

export default function Layouts({ layouts, _rawLayouts, handleClick }) {
  const Components = {
    titleContent: TitleContent,
    threeColumn: ThreeColumn,
    dropBlock: DropBlock,
    pressRow: PressRow,
    singleImage: SingleImage,
    twoUpImage: TwoUpImage,
    accordionBlock: AccordionBlock,
  };

  let slideIndex = -1;

  return layouts.map((block, index) => {
    if (Components[block._type]) {
      if (block._type === 'singleImage') slideIndex++;
      if (block._type === 'twoUpImage') slideIndex += 2;
      return React.createElement(Components[block._type], {
        key: block._key,
        block,
        raw: _rawLayouts[index],
        handleClick,
        slideIndex,
        index,
      });
    }
  });
}
