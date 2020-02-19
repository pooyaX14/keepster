import localforage from 'localforage';

export default class CacheManager  {

    writeData = (key, data) => localforage.setItem(key, data)

    readData = key => localforage.getItem(key)

    removeData = key => localforage.removeItem(key)
    
    clear = () => localforage.clear()
}


// function middleware() {
//     return ({ getState }) => next => (action) => {

//         if(action.type === 'SAVE_NOTE') {
//             console.log("action.payload",action.payload)
//             cache.writeData('note', action.payload)
//             return next(action)
//         }
//         return next(action);
//     };
//   }
  
//   const axiosAuth = middleware();
  
