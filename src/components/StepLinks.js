import React from 'react'
import { NavLink } from 'react-router-dom';

export default function StepLinks() {
    return (
        <div className="step-links">
            <NavLink href="/" exact>Profile</NavLink>
            <NavLink href="/social">Social</NavLink>
            <NavLink href="/review">Review</NavLink>
        </div>
    )
}
