'use client'
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux";

export function Providenciar({children}:Readonly<{children:React.ReactNode}>){
    const persitor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persitor}>
            {children}
            </PersistGate>
        </Provider>
    )    
}