import m from 'di_get_merge';
import { C1, C2, C3, C4 } from '../ci/color';
import disableTextSelectionStyle from '../disableTextSelection';

export const getContainerStyle = (props, state) => {
  const { hover } = state;
  const { style } = props;
  return m({
    fontFamily: "Monospace",
    display:"block",
    margin: "auto",
    fontSize: "180%",
    border: "4px solid " + (hover ? C1 : C2),
    backgroundColor: hover ? C3 : C4,
    color: hover ? C1 : C2,
    cursor: hover ? "pointer" : null
  }, disableTextSelectionStyle, style);
}
