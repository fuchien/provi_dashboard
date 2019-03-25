import { call, put } from "redux-saga/effects";

import api from "../../../services/api";

import { Creators as InstallmentsActions } from "../../ducks/installments";

export const addInstallments = function*(action) {
  try {
    console.log('CHAMANDO')
    const response = yield call(api.get, `/5c923b0932000029056bce39`);

    yield put(InstallmentsActions.addInstallmentsSuccess(response.data));
  } catch (error) {
    yield put(
      InstallmentsActions.addInstallmentsFailure("Erro ao pegar os empréstimos")
    );
  }
};
