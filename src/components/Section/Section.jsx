import PropTypes from 'prop-types';
import { MainTitle, Title } from './Section.styled';

export function Section({ title, children, subTitle }) {
  return (
    <div>
      <MainTitle>{title}</MainTitle>
      <Title>{subTitle}</Title>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
