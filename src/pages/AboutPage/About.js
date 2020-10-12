import React from 'react'
import {homeObjTwo} from './Data'
import {InfoSection} from '../../components'
import {Projects,ContactMe} from '../../components/index'
const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjTwo}/>
        </div>
    )
}

export default Home