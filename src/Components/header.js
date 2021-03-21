import React from 'react';
import SearchBarComponent from './search-bar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { gameFilter } from '../Actions/gameFilter'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fillAll: "blue", fillNew: "black", fillTop: "black" };
    }

    render() {
        return <div>
            <Row >
                <Col xs lg="1"><img src={"../images/SLOTS@1X.png"} height={18} width={71} alt="SLOTS"/></Col>
                <Col xs lg="7"></Col>
                <Col xs lg="4">
                    <Row>


                        <Col xs lg="2"><Button variant="flatAll" size="sm" onClick={() => { this.props.gameFilter({ filter: "All" }); this.setState({ fillAll: "blue", fillNew: "black", fillTop: "black" }); }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                                <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                            </svg> All</Button></Col>
                        <Col xs lg="2"><Button variant="flatNew" size="sm" onClick={() => { this.props.gameFilter({ filter: "New" }); this.setState({ fillAll: "black", fillNew: "blue", fillTop: "black" }); }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                        </svg>New</Button></Col>
                        <Col xs lg="2"> <Button variant="flatTop" size="sm" onClick={() => { this.props.gameFilter({ filter: "Top" }); this.setState({ fillAll: "black", fillNew: "black", fillTop: "blue" }); }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>Top</Button></Col>

                        <Col xs lg="6"><SearchBarComponent></SearchBarComponent></Col>
                    </Row>
                </Col>
            </Row>


            <style type="text/css">
                {`
                        .btn-flatAll {
                        background-color: white;
                        color: ${this.state.fillAll};
                        }
                        .btn-flatNew {
                            background-color: white;
                            color: ${this.state.fillNew};
                        }
                        .btn-flatTop {
                            background-color: white;
                            color: ${this.state.fillTop};
                        }

                        .btn-sm {
                        padding: 0.1rem 0.1rem;
                        font-size: 0.5 rem;
                        }
                        `}
            </style>

        </div>
    };

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ gameFilter: gameFilter }, dispatch)
}
//Component to display header which consists of SLOTS, filters and searchbar component.
export default connect(null, matchDispatchToProps)(HeaderComponent);