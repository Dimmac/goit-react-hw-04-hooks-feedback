import PropTypes from 'prop-types';
import { SectionStyledApp, Title } from './Section.styled';

export default function Section({title, children}) {
  return (
    <SectionStyledApp>
      <Title>{title}</Title>
      {children}
    </SectionStyledApp>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
