import React from 'react';
import { Image } from 'antd';
import '../styles/user-item.css'

export default class UserItem extends React.Component {
    render() {
        return (
            <div className='item'>
                <Image
                    width={60}
                    src={this.props.user.avatar_url}
                    className='avatar'
                />
                <a href={this.props.user.html_url} target='_blank' rel="noreferrer">
                    <span className='username'>{this.props.user.login}</span>
                </a>
            </div>
        );
    }
}