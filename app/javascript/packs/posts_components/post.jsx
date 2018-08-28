import React from 'react';
import {observer, inject} from 'mobx-react';
import {observable, action, extendObservable} from 'mobx';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";


@inject('rootStore') @observer
export default class Post extends React.Component {
    constructor(props) {
        super(props);

        extendObservable(this, {});
    }


    handleDelete = () => {
        const {rootStore, post} = this.props;
        rootStore.deletePost(post);
    };

    render() {
        const {rootStore, post} = this.props;


        return (
            <tr>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>
                    <Button onClick={this.handleDelete}
                            block
                            disabled={!rootStore.isPersisted(post)}
                    >
                        Eliminar
                    </Button>
                </td>
            </tr>
        );
    }


}

Post.propTypes = {};