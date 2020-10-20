import React from 'react';
import './HomePage.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

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
                        <Link to="/catalog">
                            <p>See Courses</p>
                        </Link>
                        <Link to="/admin">
                            <p>Edit Courses</p>
                        </Link>
                    </div>
                </section>

                <Footer/>
            </div>
        );
    }
}

export default HomePage;