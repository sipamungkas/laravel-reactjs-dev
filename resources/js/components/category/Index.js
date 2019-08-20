import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Add from './Add';
import Edit from './Edit';
import Listing from './Listing';


export default class About extends Component {
    render() {
        return (
            <div>

                <Link to="/category" className="btn btn-primary">Listing</Link>
                <Link to="/category/add" className="btn btn-primary">Add</Link>
                <Route exact path="/category" component={Listing} />
                <Route exact path="/category/add" component={Add} />
                <Route exact path="/category/edit/:id" component={Edit} />

            </div>

        )
    }
}