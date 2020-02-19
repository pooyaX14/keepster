import CacheManager from './cache';
import store from '../store/getStore'

const cache = new CacheManager();


console.log("store inside loadState is..", store.getState())

// store.subscribe(() => {
//     console.log("store is now....", store.getState())
// })