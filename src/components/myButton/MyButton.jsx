// * с объектом props, без деструктуризации
// import './myButton.css'
// function MyButton(props) {
//   return <button onClick={props.func} className="my-button">{props.text}</button>
// }
// export default MyButton;
// * c деструктуризацией
// * мы забираем значения из объекта по ключам и кладем в переменные с соответствующим именем в одну строчку

import './myButton.css'
function MyButton({func, isDanger, text}) {
  console.log(isDanger)
  return <button onClick={func} className={`my-button ${isDanger ? 'btn-danger': ''}`}>{text}</button>
}

export default MyButton;
