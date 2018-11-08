import React, { Component, Fragment } from 'react';
import './footer.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div id="section_footer">
                    {/* <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <div id="title">
                                    <h1>Contato</h1>
                                    <img id="icon_contact" src={icon_contact} />
                                </div>
                            </Col>
                        </Row>
                </Grid> */}
                <p>Isabelle Ichikawa Yagi</p>
                <p>isabellleyagi@alunos.utfpr.edu.br</p>
                </div>
            </Fragment>
                );
            }
        }
        
export default Footer;