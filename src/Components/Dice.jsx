import PropTypes from "prop-types";
export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
  };
  return (
    <div
      onClick={props.holdDice}
      className="dice"
      style={styles}
    >
      <p> {props.value} </p>
    </div>
  );
}

Dice.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  holdDice: PropTypes.func,
  isHeld: PropTypes.bool,
};
