import React, { Component, Fragment } from 'react';
import './blog.css';
import { Grid, Row, Col } from 'react-bootstrap';

import icon_blog from '../../images/icon_blog.svg';

class Blog extends Component {
  
    render() {
        return (
            <Fragment>
                <div id="section_blog">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div id="title">
                                <h1>Blog</h1>
                                <img id="icon_blog" src={icon_blog} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={4} sm={6}>
                        <div class="blog">
                            <p><b>Brasil ocupa o 9º lugar nos investimentos em Tecnologia da Informação</b></p>
                            <div id="image1"></div><br></br>
                            <p>País investiu 38 bilhões de dólares em hardwares, softwares e serviços no ano passado, aumento de 4,5% em relação a 2016.</p>
                            <a href="https://exame.abril.com.br/brasil/brasil-ocupa-o-9o-lugar-nos-investimentos-em-tecnologia-da-informacao/" target="_blaket">
                            <div class="leia"> 
                                <p>Leia +</p>
                            </div>
                            </a>
                        </div>
                        </Col>

                        <Col xs={12} md={4} sm={6}>
                        <div class="blog">
                            <p><b>Universidade faz parceria com Google e lança 12 cursos online e gratuitos</b></p>
                            <div id="image2"></div><br></br>
                            <p>As aulas feitas por especialistas do Google e da Universidade do Vale do Silício ainda estão disponíveis com legenda em português.</p>
                            <a href="https://exame.abril.com.br/carreira/universidade-faz-parceria-com-google-e-lanca-12-cursos-online-e-gratuitos/" target="_blaket">
                            <div class="leia">
                                <p>Leia +</p>
                            </div>
                            </a>
                        </div>
                        </Col>

                        <Col xs={12} md={4} sm={6}>
                        <div class="blog">
                            <p><b>Cidade na Nova Zelândia tem 0,8% de desemprego e busca profissionais de TI</b></p>
                            <div id="image3"></div>
                            <p>Queenstown quer atrair quem trabalha em áreas como inteligência artificial e tecnologia da informação para impulsionar sua qualidade de turismo.</p>
                            <a href="https://exame.abril.com.br/carreira/cidade-na-nova-zelandia-tem-08-de-desemprego-e-busca-profissionais-de-ti/" target="_blaket">
                            <div class="leia">
                                <p>Leia +</p>
                            </div>
                            </a>
                        </div>
                        </Col>
                    </Row>
                </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Blog;