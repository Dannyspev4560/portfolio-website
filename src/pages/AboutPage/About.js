import React from 'react'
import {homeObjTwo} from './Data'
import {InfoSection} from '../../components'
const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjTwo}/>
        </div>
    )
}

export default Home