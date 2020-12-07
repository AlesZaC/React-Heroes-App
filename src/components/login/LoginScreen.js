import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types'
import '../login/login.css'

export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext)

    //console.log( user , dispatch)

    const lasPath = localStorage.getItem('lastPath') || '/'



    const [formValues, handleInputChange] = useForm({
        userText: ''
    })

    const { userText } = formValues;
    //console.log(userText);


    const handleLogin = (e) => {
        e.preventDefault();
        // history.replace('/');

        if (userText === '') {

            let alert = document.getElementById('valided')
            alert.classList.add('d-block');

        } else {



            const action = {
                type: types.login,
                payload: {
                    name: userText

                }
            }
            dispatch(action)


            history.replace(lasPath);

        }

    }


    return (

        <div className="container" >
            <h1 className="text-center"> LOGIN </h1>
            <hr />

            <form onSubmit={handleLogin}>
                <h4>USER: </h4>
                <input
                    name="userText"
                    value={userText}
                    type="text"
                    autoComplete="off"
                    className=" form-control mt-3"
                    placeholder="Enter your user"
                    onChange={handleInputChange} />

                <br />
                <div id="valided" className="alert alert-info d-none" role="alert">
                    Debe Ingresar el Nombre
                     </div>


                <h4>PASSWORD: </h4>
                <input className=" form-control mt-3" type="password" disabled />
                <button type="submit" className="btn mt-4 btn-block btn-info">Login</button>
            </form>


            <p className="text-center text-uppercase mt-2">debes ingresar un nombre y dar login</p>
            <img className=" img-logo img-responsive" src="/logoH.png" alt="Logo" />

        </div>
    )
}