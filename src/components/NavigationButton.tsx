import styled from 'styled-components';
import {
  highlightColor,
  highlightedTextColor,
  textColor,
} from '../styleVariables';

const NavigationButtonWrapper = styled.span`
  display: inline-block;
  vertical-align: bottom;
  padding: 10px;
  box-sizing: border-box;
  height: 40px;
  width: 160px;
`;

const NavigationButtonLink = styled.a<{ $isSelected }>`
  text-decoration: none;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  color: ${({ $isSelected }) =>
    $isSelected ? highlightedTextColor : textColor};
  border-bottom: ${({ $isSelected }) =>
    $isSelected ? `2px solid ${highlightColor}` : 'none'};
  &:hover {
    color: ${highlightedTextColor};
  }
`;

type NavigationButtonProps = {
  isSelected: boolean;
  href: string;
  label: string;
};

const NavigationButton = ({
  isSelected,
  href,
  label,
}: NavigationButtonProps) => (
  <NavigationButtonWrapper>
    <NavigationButtonLink href={href} $isSelected={isSelected}>
      {label}
    </NavigationButtonLink>
  </NavigationButtonWrapper>
);

export default NavigationButton;
