import { useState, useContext } from 'react';

import { useForm } from 'react-hook-form';
import Navigation from '../../components/Navigation/Navigation';

function Login () {

    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const userName = watch(["email"]);
    const onSubmit = () => {

    }

    return (
        <>
        <Navigation />
        <section>
            <div>
                {loggedIn ? (
                    <div className={Styles.logout}>
                        <h1>Welcome, {name}!</h1>
                        <button onClick={() => setLoggedIn(false)}>Logout</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Hello User</h1>
                        <p>Please enter your e-mail address to log in</p>
                        <br/><br/>
                        <label>Email</label>
                        <input {...register("email", {
                            required: true,
                            /* REF: Geek for Geeks - Validate Email Address using RegExp in JavaScript: https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/ */
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/},
                                message: "Please enter a valid email address"
                            })}/>
                        <p>{errors.email?.message}</p>
                        <br/><br/>
                        <label>Password</label>
                        <input {...register("password", {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                },
                                pattern: {
                                    /* REF: Geek for geeks - JavaScript - Validate Password in JS: https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-password-using-regular-expressions/ */
                                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                                    message: "Password must contain at least one uppercase, one lowercase, and one number"
                                }
                        })} />
                        <p>{errors.password?.message}</p>
                        <br/><br/>
                        <button type="submit">Login</button>
                    </form>
                )}
            </div>
        </section>
        </>
    )
}

export default Login;