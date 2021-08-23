import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    
    
    render() {
        return (
            <footer>
                <hr/>
                <Container>
                    <a href="https://www.linkdin.com">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a href = "https://www.github.com">
                        <FontAwesomeIcon icon={faGithub}/>

                    </a>
                </Container>
            </footer>
        )
    }
}

export default Footer
