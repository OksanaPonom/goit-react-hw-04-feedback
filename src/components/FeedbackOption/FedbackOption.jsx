import PropTypes from 'prop-types';

import {
  List,
  GoodIcon,
  NeutralIcon,
  BadIcon,
  Button,
} from './FeedbackOption.styled';

const icons = {
  good: <GoodIcon />,
  neutral: <NeutralIcon />,
  bad: <BadIcon />,
};

export function FeedbackOption({ options, onLeaveFeedback }) {
  return (
    <div>
      <List>
        {options.map(option => {
          return (
            <li key={option}>
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                {icons[option]}
                {option}
              </Button>
            </li>
          );
        })}
      </List>
    </div>
  );
}
FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
