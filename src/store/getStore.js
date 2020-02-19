import { configureStore, configureDefaultState} from './index';

const defaultState = configureDefaultState();
const store = configureStore(defaultState);



// store.subscribe(() => {
//     console.log("store is now....", store.getState())
// })

export default store;