import './myButton.css'
function MyButton(props) {
  return <button onClick={props.func} className="my-button">{props.text}</button>
}

export default MyButton;
