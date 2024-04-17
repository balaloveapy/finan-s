import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import slices from './reduxtypes'

const PersistConfig = {
    timeout: 1,
    key: 'root',
    storage
}
const rootreducer = combineReducers({
    userData: persistReducer(PersistConfig, slices)
})
const store = configureStore(
    {
        reducer: rootreducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
                }
            })
    }
)
const persistor = persistStore(store)
export { store, persistor }
export type RootState = ReturnType<typeof store.getState>