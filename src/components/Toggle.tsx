import styled from 'styled-components';
import {
  borderColor,
  highlightedTextColor,
  textColor,
  white,
} from '../styleVariables';

const ToggleContainer = styled.span<{ $width: string; $height: string }>`
  display: inline-block;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;
  position: relative;
`;

const Option = styled.span<{ $width: string; $height: string }>`
  cursor: pointer;
  display: inline-block;
  height: ${({ $height }) => $height};
  width: calc(${({ $width }) => $width} / 2);
  box-sizing: border-box;
  padding: 10px;
  line-height: 20px;
  font-size: 16px;
  color: ${textColor};
  text-align: center;
`;

const SelectedOption = styled.span<{ $checked }>`
  background: ${white};
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 0;
  left: ${({ $checked }) => ($checked ? '160px' : '0')};
  height: 40px;
  width: 160px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  line-height: 20px;
  font-size: 16px;
  color: ${highlightedTextColor};
  text-align: center;
  border: 1px solid ${borderColor};
  transition: 0.5s;
`;

type ToggleProps = {
  width: string;
  height: string;
  checked: boolean;
  labels: { checked: string; unchecked: string };
  onChange: (checked: boolean) => void;
};

const Toggle = ({
  width = '320px',
  height = '40px',
  checked = false,
  labels = { checked: 'Checked', unchecked: 'Unchecked' },
  onChange,
}: ToggleProps) => (
  <ToggleContainer $width={width} $height={height}>
    <Option $width={width} $height={height} onClick={() => onChange(false)}>
      {labels.unchecked}
    </Option>
    <Option $width={width} $height={height} onClick={() => onChange(true)}>
      {labels.checked}
    </Option>
    <SelectedOption $checked={checked}>
      {checked ? labels.checked : labels.unchecked}
    </SelectedOption>
  </ToggleContainer>
);

export default Toggle;
