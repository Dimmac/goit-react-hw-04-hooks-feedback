import PropTypes from 'prop-types';
import {
  StatisticListStyle,
  StatisticItem,
  StatisticValues,
} from './Statistic.styled';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <StatisticListStyle>
      <StatisticItem>
        <StatisticValues>Good: {good} </StatisticValues>
      </StatisticItem>
      <StatisticItem>
        <StatisticValues>Neutral: {neutral} </StatisticValues>
      </StatisticItem>
      <StatisticItem>
        <StatisticValues>Bad: {bad} </StatisticValues>
      </StatisticItem>
      <StatisticItem>
        <StatisticValues>Total: {total} </StatisticValues>
      </StatisticItem>
      <StatisticItem>
        <StatisticValues>
          Positive feedback: {positivePercentage}{' '}
        </StatisticValues>
      </StatisticItem>
    </StatisticListStyle>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
