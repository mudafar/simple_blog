import React from 'react';
import {observer, inject} from 'mobx-react';
import {observable, action, extendObservable} from 'mobx';
import PropTypes from 'prop-types';
import {Form, Button, FormControl, Col, Row} from "react-bootstrap";


@inject("rootStore") @observer
export default class New extends React.Component {
    constructor(props) {
        super(props);

        extendObservable(this, {});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.rootStore.createPost();

    };


    canCreate() {
        const {rootStore} = this.props;

        return !!rootStore.postForm.name && !!rootStore.postForm.description
    }

    render() {
        const {rootStore} = this.props;
        const form = rootStore.postForm;

        return (
            <div className="new-container">
                <Form inline onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xs={4}>
                            <FormControl type="text"
                                         value={form.name}
                                         placeholder='Nombre'
                                         onChange={e => form.name = e.target.value}/>

                        </Col>

                        <Col xs={4}>
                            <FormControl value={form.description}
                                         placeholder='Description'
                                         onChange={e => form.description = e.target.value}/>
                        </Col>


                        <Col xs={4}>

                            <Button type="submit"
                                    block
                                    className="pull-right"
                                    disabled={!this.canCreate()}
                            >
                                Crear
                            </Button>

                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }


}

New.propTypes = {};