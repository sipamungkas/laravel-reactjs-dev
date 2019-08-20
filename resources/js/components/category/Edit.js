import React, { Component } from 'react';
import axios from 'axios';
import SuccesAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert'

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_name: '',
            alert: null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.oncChangeCategoryName = this.oncChangeCategoryName.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/category/edit/+' + this.props.match.params.id)
            .then(res => this.setState({
                category_name: res.data.name,
            }));
    }
    onSubmit(e) {

        const category = {
            category_name: this.state.category_name
        };
        axios.put('http://localhost:8000/api/category/edit/' + this.props.match.params.id, category)
            .then(res => {
                this.setState({ alert: 'success' })
                console.log(res.data)
            }).catch(res => this.setState({ alert: 'error' }));
        e.preventDefault();
    }
    oncChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value
        });

    }


    render() {
        return (
            <div>
                {this.state.alert == 'success' ? <SuccesAlert message={"Category Deleted Succesfully"} /> : null}
                {this.state.alert == 'error' ? <ErrorAlert message={"Failed to Delete the Category"} /> : null}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="categoryName">Category Name</label>
                        <input type="text"
                            className="form-control"
                            id="categoryName"
                            placeholder="Enter Category Name"
                            value={this.state.category_name}
                            onChange={this.oncChangeCategoryName} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>


        )
    }
}