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
                />
            ))}
        </div>
    );
}

export default Extras;







// export class Extras extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     static getDerivedStateFromProps(props, state) {
//         return props;
//     }

//     setChange = (id, value) => {
//         this.setState({extras: this.state.extras.map(extra => {
//             if(extra.id === id) {
//                 extra.amount = value;
//             }
//             return extra;
//         })
//     })
//     }

//     componentDidUpdate(prevProps, nextProps, snapShot) {

//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.extras.map((extra) => (
//                     <Extra
//                     {...extra}
//                     setChange={this.setChange}
//                     />
//                 ))}
//             </div>
//         );
//     }
// }
