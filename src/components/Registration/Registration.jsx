import { useForm } from 'react-hook-form';
import { userData } from '../../data/userData';
import Navigation from '../../components/Navigation/Navigation';

function Registration () {
    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onChange"});

    const [ firstname, surname, email, password, confirmPassword ] = watch(["firstname", "surname", "email", "password", "confirmPassword"]);
    const passwordMatch = password === confirmPassword;

    const onSubmit = () => {

    }

    return (
        <>
        <Navigation />
        <section>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input id = "firstname"
                    {...register("firstname", {
                        required: true,
                        maxLength: {
                            value: 15,
                            message: "Name must be 15 characters or less"
                        }})}/>
                    <p>{errors.firstname?.message}</p>
                    <br/><br/>

                    <label>Surname</label>
                    <input id = "surname"
                    {...register("surname", {
                        required: true,
                        maxLength: {
                            value: 20,
                            message: "Surname must be 20 characters or less"
                        }})}/>
                    <p>{errors.surname?.message}</p>
                    <br/><br/>

                    <label>Email</label>
                    <input id = "email"
                    {...register("email", {
                        required: true,
                        /* REF: Geek for Geeks - Validate Email Address using RegExp in JavaScript: https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/ */
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email address"
                        }})}/>
                    <p>{errors.email?.message}</p>
                    <br/><br/>

                    <label>Password</label>
                    <input id = "password"
                    {...register("password", {
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

                    <label>Confirm Password</label>
                    <input {...register("confirmPassword", {
                            required: true,
                        })} />
                        {/* If passwords do not match, we display the error message */}
                        {!passwordMatch && <p>Passwords do not match</p>}
                    <br/><br/>

                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default Registration;