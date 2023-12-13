import PropTypes from 'prop-types'

const SectionTitle = ({children}) => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">{children}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    children: PropTypes.string
}
export default SectionTitle;