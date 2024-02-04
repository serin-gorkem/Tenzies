import PropTypes from "prop-types";
export default function Dice(props){
    return(
        <div className="dice">
            <p> {props.value} </p>
        </div>
    )
}
Dice.propTypes={
    value:PropTypes.number
}