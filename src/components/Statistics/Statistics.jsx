import PropTypes from 'prop-types';

import {
  Title,
  List,
  ListItem,
  Text,
  TotalText,
  PercentText,
  Icon,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <Title>Statistics</Title>
      <List>
        <ListItem>
          <Text>Good: {good}</Text>
        </ListItem>
        <ListItem>
          <Text>Neutral: {neutral} </Text>
        </ListItem>
        <ListItem>
          <Text>Bad: {bad}</Text>
        </ListItem>
      </List>
      <TotalText>Total: {total}</TotalText>
      <PercentText>
        <Icon />
        Pozitive feedback: {positivePercentage}%
      </PercentText>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
