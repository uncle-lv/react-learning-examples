import React from 'react';
import axios from 'axios';
import { Input } from 'antd';
import UserList from './UserList';
import '../styles/search-box.css';

const Search = Input.Search

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            data: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    onSearch = () => {
        console.log(this.state.keyword)
        axios.get('https://api.github.com/search/users', {
            params: {
                q: this.state.keyword
            }
        }).then(
            response => {
                console.log(response.data.items)
                this.setState({ data: response.data })
            },
            error => { console.log(error) }
        )
    }

    handleChange(event) {
        this.setState({ keyword: event.target.value })
    }

    render() {
        return (
            <div>
                <Search
                    placeholder="Search..."
                    allowClear
                    onSearch={this.onSearch}
                    onChange={this.handleChange}
                    value={this.state.keyword}
                    enterButton="Search"
                    style={{ width: 304 }}
                    className='search'
                />
                <UserList data={this.state.data}></UserList>
            </div>
        )
    }
};
