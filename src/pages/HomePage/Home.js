import React from 'react'
import {homeObjOne,homeObjTwo} from './Data'
import {InfoSection} from '../../components'
import {Projects,ContactMe} from '../../components/index'
const Home = () => {
    return (
        <div>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Projects/>
            <ContactMe/>
        </div>
    )
}

export default Home