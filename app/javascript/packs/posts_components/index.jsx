import React from 'react';
import {observer, inject} from 'mobx-react';
import {observable, action, extendObservable} from 'mobx';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap'

import Post from "./post";


@inject('rootStore') @observer
export default class Index extends React.Component {
    constructor(props) {
        super(props);

        extendObservable(this, {});
    }

    render() {
        const {rootStore} = this.props;

        return (
            <div className="index-container">


                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rootStore.filteredPosts.map(post => <Post key={post.id} post={post}/>)}
                    </tbody>
                </Table>
            </div>
        );
    }


}

Index.propTypes = {};