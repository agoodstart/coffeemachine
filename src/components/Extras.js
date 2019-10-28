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
        console.log('it changed')
        setExtras(extras.map(extra => {
            if(extra.id === id) {
                extra.amount = value;
            }
            return extra;
        }))
    }

    return (
        <div>
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

export default Extras;