import React, { Component } from 'react';
import axios from 'axios';
import SuccesAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert'
export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            category_name: '',
            alert: null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.oncChangeCategoryName = this.oncChangeCategoryName.bind(this);
    }
    onSubmit(e) {

        const category = {
            category_name: this.state.category_name
        };
        console.log(category);
        axios.post('http://localhost:8000/api/category/store', category)
            .then(res => {
                console.log(res.data);
                this.setState({ alert: 'success' })
            })
            .catch(res => this.setState({ alert: 'error' }));
        e.preventDefault();
    }
    oncChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value
        });
        console.log(this.state.category_name)
    }


    render() {
        return (
            <dvi>
                {this.state.alert == 'success' ? <SuccesAlert message={"Category Added Succesfully"} /> : null}
                {this.state.alert == 'error' ? <ErrorAlert message={"Failed to Add New Category"} /> : null}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="categoryName">Category Name</label>
                        <input type="text"
                            className="form-control"
                            id="categoryName"
                            placeholder="Enter Category Name"

                            onChange={this.oncChangeCategoryName} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </dvi>

        )
    }
}