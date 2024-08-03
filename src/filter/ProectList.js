import PropTypes from 'prop-types';

function ProectList(props) {
  const { proects } = props;
  return (
    <div className="t1-proect-list"> {
        proects.map((proect, i) =>
        <img key = {
            i
        } 
        className = "t1-image" 
        src = {
            proect.img
        } 
        alt = {
            proect.category
        } 
        width="300px"></img>
      )
    }
    </div>
  );
}

ProectList.propTypes = {
  proects: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      category: PropTypes.string
    })
  ).isRequired
}

export default ProectList;
