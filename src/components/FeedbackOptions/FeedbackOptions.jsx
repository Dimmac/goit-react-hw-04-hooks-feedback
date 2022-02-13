import PropTypes from 'prop-types';
import { FeedbackButtonStyled } from './FeedbackOptions.styled';

function FeedbackOptions({options, onLeaveFeedback}) {
  return options.map((option, index) => {
    return (
      <FeedbackButtonStyled
        key={index}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </FeedbackButtonStyled>
    );
  });
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
