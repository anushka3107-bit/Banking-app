import React from 'react';
import "./SignUppage.css";

const SignUppage = () => {
    return (
        <>
            <div className='signup__container'>
                <h1>Welcome to Banking system</h1>
                <div className='signUp'>
                    <form>
                        <h1>Sign Up !</h1>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />

                        <button type='submit'>
                            Sign In
                        </button>

                        <h4>
                            <span className='signUp__newUser'>New User ?</span>
                            <span className='signUp__link'>Sign up now.
                            </span>
                        </h4>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUppage

