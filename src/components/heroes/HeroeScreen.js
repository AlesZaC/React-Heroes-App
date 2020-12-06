import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroeScreen = ({ history }) => {


    const { heroeId } = useParams();
    //const hero =  getHeroesById( heroeId )

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])



    //console.log( heroeId )

    if (!hero) {
        return <Redirect to = "/" / >
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;




    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/')

        } else {
            history.goBack();
        }


    }





    return ( <
        div className = "row mt-5" >
        <
        div className = "col-4" >
        <
        img src = { `../assets/heroes/${ heroeId }.jpg` }
        alt = { superhero }
        className = "img-thumbnail  animate__animated animate__fadeInLeft" / >

        <
        /div>

        <
        div className = "col-8" >
        <
        h3 > { superhero } < /h3> <
        ul className = "list-group list-group-flush" >
        <
        li className = "list-group-item list-group-item-info" > < b > Alter ego: < /b> { alter_ego }</li >
        <
        li className = "list-group-item list-group-item-info" > < b > Publisher: < /b> { publisher }</li >
        <
        li className = "list-group-item list-group-item-info" > < b > first_appearance: < /b> { first_appearance }</li >
        <
        li className = "list-group-item list-group-item-info" > < b > characters: < /b> {  characters }</li >


        <
        /ul>


        <
        button className = "btn btn-secondary mt-2"
        onClick = { handleReturn } >
        Return <
        /button>


        <
        /div>




        <
        /div>
    )
}