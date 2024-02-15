import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
      yield call(alert, "Something is wrong!");  
  }
}

export function* watchFetchExampleTasks() {
    console.log ("Saga is conected");
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
