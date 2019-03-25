// Types
export const Types = {
  ADD_REQUEST: "installments/ADD_REQUEST",
  ADD_SUCCESS: "installments/ADD_SUCCESS",
  ADD_FAILURE: "installments/ADD_FAILURE"
};

// Reducer
const INITIAL_STATE = {
  loading: false,
  data: {
    UserId: null,
    amountTaken: null,
    amountPayd: null,
    monthlyInterest: null,
    totalAmountInTaxes: null,
    installments: []
  },
  error: null
};

const installments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: {...state.data, ...action.payload.data}
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default installments;

// Actions
export const Creators = {
  addInstallmentsRequest: () => ({
    type: Types.ADD_REQUEST
  }),

  addInstallmentsSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addInstallmentsFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
