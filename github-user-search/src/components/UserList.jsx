import React from 'react';
import { List } from 'antd';
import UserItem from './UserItem';
import '../styles/user-list.css'

export default class UserList extends React.Component {
    render() {
        return (
            <List
                className='list'
                grid={{ gutter: 16, column: 6 }}
                dataSource={this.props.data.items}
                renderItem={item => (
                    <List.Item>
                        <UserItem user={item}></UserItem>
                    </List.Item>
                )}
            />
        )
    }
}