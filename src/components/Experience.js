import React, { Component } from 'react'
import { duration } from 'moment'
import { Container, Row, Col, Media } from 'reactstrap';

const getDuration = (duration)=>{
    const years = parseInt(duration/12);
    const months = (duration > 12) ? duration % 12 : duration
    return (years > 0 ? years + "year" + (years > 1 ? "s" : "") + " and " : " ") + (months > 0 ? months + " months" + (months > 1 ? "s" : "") : " ")

}

export class Experience extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    {
                        profile.experiences.map((experience, i)=>{
                            moment.locale('en');

                            const totalDuration = experience.roles.reduce((cnt, role) => {
                                const startDate = moment(role.startDate);
                                const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                                const duration = moment.duration(timeEnd.diff(startDate));
                                return Number(cnt) + Number(duration.asMonths().toPrecision(1))
                            },0);
                            return (
                                <div key ={i}>
                                    <Media>
                                        <Media left top href={experience.url}></Media>
                                            <Media object src={experience.logo} alt = {experience.comapanyName}/>
                                    </Media>
                                    <Media body>
                                        <Media heading>
                            <a href={experience.url}>{experience.companyName}</a>
                            <span className="jobTotalDuration">{getDuration(totalDuration)}</span>
                                        </Media>
                                        
                                    </Media>

                                </div>
                            )
                        })
                    }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Experience
