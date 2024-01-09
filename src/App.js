import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "switch to React", done: false },
    { id: 2, content: "make an annual balance sheet of profits", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="Task List" />
      <Section title="Add a new task" body={<Form />} />

      <Section
        title="Tasks List"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />
        }
      />
    </Container>
  );
}

export default App;
