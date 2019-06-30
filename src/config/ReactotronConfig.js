import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import SagaPlugin from "reactotron-redux-saga";

if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(SagaPlugin())
    .connect();

  console.tron = tron;
  tron.clear();
}
