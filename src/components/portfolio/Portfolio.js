import React, { Component, Fragment } from 'react';
import './portfolio.css';
import { Grid, Row, Col } from 'react-bootstrap';

import icon_portfolio from '../../images/icon_portfolio.svg';
import item_portfolio from '../../images/item_portfolio.svg';

class Portfolio extends Component {

    render() {
        return (
            <Fragment>
                <div id="section_portf">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div id="title">
                                <h1>Portfólio</h1>
                                <img id="icon_portfolio" src={icon_portfolio} />                               
                            </div>
                        </Col>
                        
                        <Col xs={12} md={8}>
                            <h2>Trabalhos realizados para a disciplina de Programação Web</h2>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                    <Col xs={12} md={4}>
                            <div class="work">
                                <h3>T01</h3>
                                <a href="https://github.com/isabelleichikawa/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/t01/isabelle-yagi" target="_blanket"><img class="item_portf" src={item_portfolio}/></a>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div class="work">
                                <h3>TA01</h3>
                                <a href="https://github.com/isabelleichikawa/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta01/isabelle-yagi" target="_blanket"><img class="item_portf" src={item_portfolio}/></a>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div class="work">
                                <h3>TA02</h3>
                                <a href="https://github.com/isabelleichikawa/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta02/isabelle-yagi" target="_blanket"><img class="item_portf" src={item_portfolio}/></a>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div class="work">
                                <h3>TA04</h3>
                                <a href="https://github.com/isabelleichikawa/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta04/isabelle-ichikawa" target="_blanket"><img class="item_portf" src={item_portfolio}/></a>
                            </div>
                        </Col>

                        <Col xs={12} md={4}>
                            <div class="work">
                                <h3>TA05</h3>
                                <a href="https://github.com/isabelleichikawa/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta05/isabelle-ichikawa" target="_blanket"><img class="item_portf" src={item_portfolio}/></a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Portfolio;