import React from 'react';
import './Footer.css';

export default function Footer(props) {
    return(
        <footer className="contact-info rel">
            <p className='contact-item alt'>Contact:</p>
            <a className='contact-item' href="/">Email</a>
            <a className='contact-item' href="/">LinkedIn</a>
            <a className='contact-item' href="/">GitHub</a>
        </footer>
    )
}