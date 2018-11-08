import React, { Component, Fragment } from 'react';
import './profile.css';
import { Grid, Row, Col } from 'react-bootstrap';

import image_profile from '../../images/image_profile.jpg';
import curriculo from '../../curriculo/curriculo.pdf';
import icon_profile from '../../images/icon_profile.svg';

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <div id="section_header">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div id="title">
                                <h1>Perfil</h1>
                                <img id="icon_profile" src={icon_profile} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <img id="image_profile" src={image_profile} />

                        </Col>
                        <Col xs={12} md={4}>
                            <div id="description_profile">
                                <p>Olá, sou <b>Isabelle Ichikawa Yagi</b>. Estudante de Engenharia de Software, nasci em Anjo-Shi, Aichi-Ken, atualmente morando em Cornélio Procópio - PR.</p>
                                <span><a href={curriculo} target="_blank" >
                                    <div id="curriculo">
                                        CURRÍCULO
                                    </div>
                                </a></span>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <h2>ISABELLE ICHIKAWA YAGI</h2>
                            <ul>INTERESSES
                                <li>Bioinformática</li>
                                <li>Desenvolvimento Web</li>
                            </ul>
                            <ul>IDIOMAS
                                <li>Português - Nativo</li>
                                <li>Inglês - Básico</li>
                            </ul>
                            <ul>FORMAÇÃO
                                <li>2015/ETEC - Técnico em Informático</li>
                                <li>2015/ETEC - Ensino Médio</li>
                            </ul>
                            <ul>ATIVIDADES
                                <li>Assistente de Atendimento ao Cliente</li>
                                <li>Estudante</li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Profile;