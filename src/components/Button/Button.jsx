import StyledButton from './Button.styled';
import PropTypes from 'prop-types';
const Button = ({ loadMore }) => {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        loadMore();
      }}
    >
      Load more
    </StyledButton>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
export default Button;
