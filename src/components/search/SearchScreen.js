import React, { useMemo } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
//import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroListItem } from '../heroes/HeroListItem';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;
    //const heroesFiltered = heroes;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
        //const heroesFiltered = getHeroesByName( searchText );

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`)
            //reset();
    }



    return ( <
        div >
        <
        h1 > SEARCH < /h1> <
        hr / >

        <
        div className = "row" >
        <
        div className = "col-5" >
        <
        h4 > FORM < /h4> <
        hr / >
        <
        form onSubmit = { handleSearch } >
        <
        input name = "searchText"
        value = { searchText }
        type = "text"
        autoComplete = "off"
        placeholder = "Find your Hero"
        className = "form-control"
        onChange = { handleInputChange }
        /> <
        /form>

        <
        button type = "submit"
        className = "btn mt-2 btn-block btn-secondary" >
        Search... <
        /button>


        <
        /div>

        <
        div className = "col-7" >

        <
        h4 > RESULTS < /h4> <
        hr / > {
            (q === '') &&

            <
            div className = "alert alert-info" >
            Search a hero <
            /div>
        }

        {
            (q !== '' && heroesFiltered.length === 0) &&

            <
            div className = "alert alert-danger" >
                there is no a hero with { q } <
                /div>
        }




        {
            heroesFiltered.map(hero => ( <
                HeroListItem key = { hero.id } {...hero }

                />
            ))

        }

        <
        /div> <
        /div>


        <
        /div>
    )
}