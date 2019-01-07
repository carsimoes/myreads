import React from 'react'
import GitIcon from '../icons/GitHub-120.png';
import BookLogo from './BookLogo'

const Menu = (props) => {
    return (

        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <BookLogo></BookLogo>
                <div className="navbar-item">
                    <p className="title">My Reads</p>
                </div>

            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <p className="control">

                            <a className="button is-primary" target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/tonare/reactnd-myreads.git">
                                <img src={GitIcon} alt="git logo" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Menu