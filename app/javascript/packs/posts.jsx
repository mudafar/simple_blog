import React from 'react';
import {observer, Provider} from 'mobx-react';
import {observable, action, extendObservable} from 'mobx';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import {Row, Col, Button, Modal} from 'react-bootstrap';

import RootStore from './posts_components/root_store';
import Index from "./posts_components";
import New from "./posts_components/new";
import Filter from "./posts_components/filter";


@observer
class Posts extends React.Component {
    constructor() {
        super();

        this.rootStore = new RootStore();
    }


    renderLoading() {
        return (
            <div> Cargando ...</div>
        )
    }

    render() {
        const {} = this.props;

        if (this.rootStore.loading) {
            return this.renderLoading()
        }

        return (
            <Provider rootStore={this.rootStore}>
                <div className="posts-container">

                    <Col md={8} mdOffset={2} sm={8} smOffset={2}>
                        <br/><br/>

                        <Filter/>
                        <br/><br/>

                        <Index/>
                        <br/>

                        <New/>

                        <br/>

                    </Col>


                </div>
            </Provider>
        );
    }
}

Posts.propTypes = {};


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Posts/>,
        document.body.appendChild(document.createElement('div')),
    )
});