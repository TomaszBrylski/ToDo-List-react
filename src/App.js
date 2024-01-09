import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "switch to React", done: false },
  { id: 2, content: "make an annual balance sheet of profits", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Task List" />
      <Section title="Add a new task" body={<Form />} />

      <Section
        title="Tasks List"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Container>
  );
}

export default App;
