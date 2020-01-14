import React, { useContext, useState, useEffect  } from 'react';
import { ExtrasContext } from './../context';
import Extra from './Extra';

const Extras = () => {
    const extrasContext = useContext(ExtrasContext);
    const { cExtras, cSetExtras } = extrasContext;
    const [extras, setExtras] = useState(cExtras);

    useEffect(() => {
        cSetExtras(extras);
    });

    const setChange = (id, value) => {
        setExtras(extras.map(extra => {
            if(extra.id === id) {
                extra.currentAmount = value;
            }
            return extra;
        }))
    }

    return (
        <div style={sliders}>
            {extras.map((extra) => (
                <Extra
                {...extra}
                setChange={setChange}
                key={extra.id}
                />
            ))}
        </div>
    );
}

const sliders = {
    display: 'flex',
    justifyContent: 'space-around'
}

export default Extras;