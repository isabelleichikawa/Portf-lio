import React, { Component, Fragment } from 'react';
import './info.css';
import { Grid, Row, Col } from 'react-bootstrap';

import icon_info from '../../images/icon_info.svg';
import icon_github from '../../images/icon_github.svg';

class Info extends Component {
    render() {
        return (
            <Fragment>
                <div id="section_info">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div id="title">
                                <h1>Mais Informações</h1>
                                <img id="icon_info" src={icon_info} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={6}>
                            <div class="info">
                                <p class="title_info">BIOGRAFIA</p>
                                <p>
                                Em 2013 eu iniciei o curso técnico em informática na Escola Técnica (ETEC) de Taquarituba.Como trabalho de conclusão de curso, elaboramos um sistema de gerenciamento para uma mercearia. Logo após o término, ingressei na graduação em engenharia de software na Universidade Tecnológica Federal do Paraná (UTFPR), com término previsto para final do ano de 2019.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div class="profissao">
                                <p class="title_info">PROFISSÃO</p>
                                <p>
                                Recentemente terminei minha iniciação científica voltada para a área de bioinformática. A experiência de entrar em contato com essa área foi ótima. Atualmente faço parte do time de suporte Metroex da Forlogic. Confesso que adoro fazer parte desse time, porém estou em fase de transição para o time de desenvolvimento web, o que para mim é um grande passo na empresa e na vida.
                                </p>
                            </div>
                        </Col>

                        <Col xs={12} md={12}>
                        <div class="github">
                            <a href="https://github.com/isabelleichikawa" target="_blanket"><img id="icon_github" src={icon_github} /></a>
                            <p class="title_info">GITHUB</p>
                            <p>Confira alguns dos meus trabalhos!</p>
                        </div>
                        </Col>

                    </Row>
                </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Info;