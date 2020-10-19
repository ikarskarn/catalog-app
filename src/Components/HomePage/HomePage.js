import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="page-home">
                <section className="section-one rel">
                    <h2>Overview</h2>
                    <p>As a user, you can checkout the catalog and see what training we have to offer.  As an administrator, you can create, update, or delete existing training courses.</p>
                </section>

                <section className="section-two rel">
                    <h2>What would you like to do?</h2>
                    <div className="section-split">
                        <a href="/catalog">
                            <p>See Courses</p>
                        </a>
                        <a href="/admin">
                            <p>Edit Courses</p>
                        </a>
                    </div>
                </section>

                <footer className="content-info rel">
                    <p>Contact:</p>
                    <a href="/">Marc Tucker</a>
                    <p> | </p>
                    <a href="/">LinkedIn</a>
                    <p> | </p>
                    <a href="/">GitHub</a>
                </footer>
            </div>
        );
    }
}

export default HomePage;