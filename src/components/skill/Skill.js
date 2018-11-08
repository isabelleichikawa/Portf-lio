import React, { Component, Fragment } from 'react';
import './skill.css';
import { Grid, Row, Col } from 'react-bootstrap';

import icon_skill from '../../images/icon_skill.svg';

class Skill extends Component {
    state = {
        skills: ['UML', 'SQL', 'JAVA', 'HTML5', 'CSS3', 'GIT', 'JAVASCRIPT', 'DELPHI', 'PACOTE OFFICE']
    }

    show_skills = () => {
        const skill = this.state.skills;
        const list_itens = skill.map((iten) =>
        <Col xs={12} md={3} >
            <li class= "skill">{iten}</li> 
        </Col>
        );

        return ( 
        <Row className="show-grid">
            <ul class="skills">{list_itens}</ul> 
        </Row>
        );
    }

    render() {
        return (
            <Fragment>
                <div id="section_skills">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <div id="title">
                                <h1>Skills</h1>
                                <img id="icon_skill" src={icon_skill} />
                            </div>
                        </Col>
                    </Row>
                        {this.show_skills()}
                </Grid>
                </div>
            </Fragment>
        );
    }
}

export default Skill;