import { all, takeLatest} from "redux-saga/effects";

import { Types as InstallmentsTypes } from "../ducks/installments";
import { addInstallments } from "./installments";

const rootSaga = function*() {
  yield all([takeLatest(InstallmentsTypes.ADD_REQUEST, addInstallments)]);
};

export default rootSaga;
