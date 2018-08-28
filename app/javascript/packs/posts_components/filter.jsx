import React from 'react';
import {observer, inject} from 'mobx-react';
import {observable, action, extendObservable} from 'mobx';
import PropTypes from 'prop-types';
import {Button, FormControl, Form, Col, Row} from 'react-bootstrap'


@inject("rootStore") @observer
export default class Filter extends React.Component {
    constructor(props) {
        super(props);

        extendObservable(this, {});
    }

    handleFilter = (e) => {
        const {rootStore} = this.props;

        rootStore.filterString = e.target.value;
        if (!rootStore.filterString) {
            rootStore.filterPosts();
        }
    };

    render() {
        const {rootStore} = this.props;

        return (
            <div className='filter-container'>
                <Form inline>
                    <Row>
                        <Col xs={6}>
                            <FormControl type="text" value={rootStore.filterString}
                                         placeholder='Filtrar por nombre...'
                                         onChange={this.handleFilter}/>
                        </Col>

                        <Col xs={6}>
                            <Button type='submit'
                                    className="pull-right"
                                    onClick={e => {
                                        e.preventDefault();
                                        rootStore.filterPosts()
                                    }}
                            >
                                Buscar
                            </Button>
                        </Col>
                    </Row>
                </Form>

            </div>
        )
    }

}


Filter.propTypes = {};