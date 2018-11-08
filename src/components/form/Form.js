import React, { Component, Fragment } from 'react';
import './form.css';
import { Grid, Row, Col } from 'react-bootstrap';

import icon_contact from '../../images/icon_contact.svg';
import icon_facebook from '../../images/icon_facebook.svg';
import icon_linkedin from '../../images/icon_linkedin.svg';

class Form extends Component {
    render() {
        return (
            <Fragment>
                <div id="section_contact">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <div id="title">
                                    <h1>Contato</h1>
                                    <img id="icon_contact" src={icon_contact} />
                                </div>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={12} md={8} lg={12}>
                                <form method="POST" action="https://formspree.io/YOUREMAILHERE">
                                        <input type="text" name="nome" placeholder="Nome" />
                                        <input type="email" name="email" placeholder="E-mail" />
                                        <input type="text" name="assunto" placeholder="Assunto" />
                                        <textarea name="message" placeholder="Mensagem" cols="40" row = "10"/>
                                        <button type="submit">ENVIAR</button>
                                </form>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={12} md={8} lg={12}>
                                <div id="contacts">
                                <h2>REDES SOCIAIS</h2>
                                <h3>Entre em contato comigo por minhas redes sociais.</h3>
                                <a href="https://www.facebook.com/isabelle.ichikawayagi" target="_blanket"><img id="icon_facebook" src={icon_facebook}/></a>
                                <a href="https://www.linkedin.com/in/isabelle-ichikawa-yagi-b23887144/" target="_blanket"><img id="icon_linkedin" src={icon_linkedin}/></a>
                                </div>
                            </Col>
                        </Row>
                </Grid>
                </div>
            </Fragment>
                );
            }
        }
        
export default Form;