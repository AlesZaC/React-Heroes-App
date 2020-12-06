import React, { useState } from 'react'

import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {

    const [heroe] = useState('DC Comics')


    return ( <
        div >

        <
        h1 > DC COMICS < /h1> <
        hr / >
        <
        HeroList publisher = { heroe } > < /HeroList>

        <
        /div>
    )
}