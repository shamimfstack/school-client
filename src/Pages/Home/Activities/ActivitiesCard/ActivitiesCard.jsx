import PropTypes from 'prop-types'

const ActivitiesCard = ({image, title}) => {
  return (
    <div className="p-5 rounded-lg shadow-lg">
            <img src={image} alt="card image" />
            <h3 className="text-2xl text-green-500">{title}</h3>
        </div>
  );
}

ActivitiesCard.propTypes = {
    image: PropTypes.node,
    title: PropTypes.node
}

export default ActivitiesCard;
