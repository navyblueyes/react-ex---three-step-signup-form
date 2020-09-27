import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

/* Source for regex -- https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */

export default function ProfileForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    function onSubmit(data) {
        // TODO handle data
        console.log(data);
        history.push('/social');
        /* utilizing useHistory function from ReactRouterDOM to programmically move user to Social page */
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Tell us about yourself.</h2>
            <input 
                type="text" 
                name="name" 
                placeholder="What's your name?" 
                ref={register({ required: true })}
            />
            <p>{errors.name && 'Name is required.'}</p>

            <input 
                type="email" 
                name="email" 
                placeholder="What's your email?" 
                ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
            />
            <p>{errors.email && 'Email is required.'}</p>

            <input 
                type="submit" 
                value="Next" 
            />
        </form>
    )
}
