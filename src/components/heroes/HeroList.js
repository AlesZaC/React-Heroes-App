import React ,{ useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroListItem } from './HeroListItem';

export const HeroList = ({ publisher }) => {


     const heroes = useMemo(() => getHeroesByPublisher(publisher) , [ publisher ])
    //const heroes = getHeroesByPublisher(publisher);


    return (
        <div className="card-columns  animate__animated animate__fadeIn">
            {
                heroes.map( hero =>(   

                //lo envio asi  como esta o asi =>  key={hero.id} {...hero}
                <HeroListItem key={hero.id}
                id={hero.id}
                superhero={hero.superhero}
                publisher ={hero.publisher}
                alter_ego={hero.alter_ego}
                first_appearance = {hero.first_appearance}
                characters={hero.characters}
                />
                ))
            }
        </div>
    )
}
