import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = props => {

    const {
        cExtras: initialExtras,
        children
    } = props;

    const [cExtras, cSetExtras] = useState(initialExtras);

    const extrasContext = {
        cExtras,
        cSetExtras
    };

    return (
        <Context.Provider value={extrasContext}>
            {children}
        </Context.Provider>
    );
};

export const {Consumer} = Context;