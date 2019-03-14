// clear all data from console when start 
console.clear()

// ACTION CREATORS
// people dropping off a from 
const createPolicy = (name, amount) => {
  return {  
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { 
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

const deletePolicy = (name) => {
  return { 
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

// REDUCERS
// departaments
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type == 'CREATE_CLAIM') {
    // we care abour action (FORM)
    // oldListOfClaims.push(action.payload); modify array with new values
    return [...oldListOfClaims, action.payload]; // create a new array appending new values
  }
  // we don't care the action (form)
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amountOfMoneyToCollect;
  }
  return bagOfMoney;
}

const polices = (listOfPolices = [], actions) => {
  if (action.type === 'CREATE_POLICE') {
    return [...listOfPolices, action.payload.name];
  } else if(action.type === 'DELETE_POLICE') {
    return listOfPolices.filter(name => name != action.payload.name);
  }
  return listOfPolices;
}

// obs: the firsth objective is get some data of some action and after modify and remove the data existing with base 
// on the load of a action 

const { createStores, combineReducers } = Redux;

const ourDepartmens = combineReducers({
  claimsHistory: claimsHistory,
  accounting: accounting,
  polices: polices
});

const store = createStore(ourDepartmens);

store.dispatch(createPolicy('Leo', 22));
store.dispatch(createPolicy('Bob', 19));
store.dispatch(createPolicy('Chris', 27));
store.dispatch(deletePolicy('Leo'));

console.log(store.getState());