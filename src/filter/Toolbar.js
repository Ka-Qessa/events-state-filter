import PropTypes from 'prop-types';

function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  
  return (
    <div className="t1-toolbar">
      {filters.map((filter) =>
        <button key={filter} className={filter === selected ? "t1-button t1-selected" : "t1-button"} onClick={() => onSelectFilter(filter)}>
          {filter}
        </button>
      )}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar;
