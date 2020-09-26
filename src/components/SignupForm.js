import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from './1ProfileForm';
import SocialForm from './2SocialForm';
import Review from './3Review';
import StepLinks from './StepLinks';

export default function SignupForm() {
    return (
        <div className="signup-form">
            { /* steps and links */ }
            <StepLinks />
            { /* show the forms */ }
            <Switch>
                <Route path="/" exact component={ProfileForm} />
                <Route path="/social" exact component={SocialForm} />
                <Route path="/review" exact component={Review} />
            </Switch>

        </div>
    )
}
