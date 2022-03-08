import React from 'react';

export default function Stats({id}) {
    return(
    <nav className="level" id={id}>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading">Total</p>
            <p className="title">3,456</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading">Following</p>
            <p className="title">123</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading">Followers</p>
            <p className="title">456K</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
            </div>
        </div>
    </nav>

    )
    }
