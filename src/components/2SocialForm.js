import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function SocialForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    function onSubmit(data) {
        // TODO handle data
        console.log(data);
        history.push('/review');
        /* utilizing useHistory function from ReactRouterDOM to programmically move user to Social page */
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>How can we find you on social?</h2>
            <input 
                type="text" 
                name="twitter" 
                placeholder="What's your Twitter?" 
                ref={register({ required: true })}
            />
            <p>{errors.twitter && 'Twitter Profile is required.'}</p>

            <input 
                type="text" 
                name="facebook" 
                placeholder="What's your FaceBook?" 
                ref={register({ required: true })}
            />
            <p>{errors.facebook && 'FaceBook Profile is required.'}</p>

            <input 
                type="submit" 
                value="Next" 
            />
        </form>
    )
}
