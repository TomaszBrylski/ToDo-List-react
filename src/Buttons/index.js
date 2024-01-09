import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {tasks.some(({ done }) => done) && hideDone ? "Show" : "Hide"} tasks done
            </button>

            <button className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Mark all tasks as done
            </button>
        </div>
    )
);


export default Buttons;
