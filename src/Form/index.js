import "./style.css";

const Form = () => (
  <form className="form">
    <input className="form__newTask" placeholder="What is there to do?" />
    <button className="form__button">Add task</button>
  </form>
);

export default Form;