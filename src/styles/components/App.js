import { C1, C2 } from '../ci/color';

export const getContainerStyle = (props) => {
  return {
    fontFamily: "Monospace",
    width: "200px",
    display:"block",
    margin: "auto",
    fontSize: props.width > 700 ? "250%" : "180%",
    textAlign: "center",
    color: props.done % 2 ? C1 : C2
  };
};
export const getButtonStyle = () => {
  return {
    fontSize: "120%",
    fontWeight: "bold",
    borderRadius: "3px"
  };
};
export const getNameStyle = () => {
  return {
    fontWeight: "bold",
    display: "block"
  };
};
export const getDoneStyle = () => {
  return {
    padding: "10px",
    display: "block",
    fontSize: "150%"
  };
};
