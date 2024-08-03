import { useState } from 'react';
import Toolbar from './Toolbar';
import ProectList from './ProectList';

function Portfolio(props) {
  const { 
    proects, 
    filters 
  } = props;

  const [{ 
    selected, 
    proectList 
  }, setSelected] = useState({ 
    selected: "All", 
    proectList: proects
  });

  const selectFilter = (event) => {
    setSelected(() => {
      const filter = event;
      return {
        selected: filter,
        proectList: proects.filter((proect) => filter === 'All' || filter === proect.category)
      }
    });
  }

  return (
    <div className="task-1">
      <Toolbar 
        filters={filters}
        selected={selected} 
        onSelectFilter={selectFilter}
      />
      <ProectList proects={proectList} />
    </div>
  );
}

export default Portfolio;
