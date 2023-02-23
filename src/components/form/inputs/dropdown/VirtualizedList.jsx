import React from 'react';
import ReactVirtualizedAutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ className, itemSize, listSize, row }) => {
  return (
    <div className={className || ''} style={{ flex: '1 1 auto', height: '100vh', width: '100%' }}>
      <ReactVirtualizedAutoSizer>
        {({ height, width }) => (
          <List
            className='List'
            height={height}
            width={width}
            itemCount={listSize}
            itemSize={itemSize}
          >
            {row}
          </List>
        )}
      </ReactVirtualizedAutoSizer>
    </div>
  )
}

export default VirtualizedList;