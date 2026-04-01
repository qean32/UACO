"use client";


import React from "react";
import { store } from "@/redux";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export const Root = (props: React.PropsWithChildren) => {
    return (
        <SessionProvider>

            <Provider store={store}>
                {props.children}
            </Provider>
        </SessionProvider>
    );
};
