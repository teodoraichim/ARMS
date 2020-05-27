import React, { Component } from "react";
import styled from "styled-components";
import Pagination from './Pagination'
import {RestyledRow} from '../Header/Header'
import Col from 'react-bootstrap/Col'

export const FooterRow = styled(RestyledRow)`
position: absolute;
bottom: 0;
padding-bottom: 12px;
`
export default class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <FooterRow height="70px">
                    <Col>
                    <Pagination></Pagination>
                    </Col>
                </FooterRow>
            </React.Fragment>
        )
    }
}