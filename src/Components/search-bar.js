import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { gameSearch } from '../Actions/gameSearch'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function SearchBarComponent(props) {

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.gameSearch({ Search: e.target.value })

    }

    return (<div>

        <InputGroup className="mb-3 position-relative">

            <FormControl className="input-search"
                onChange={callSearchFunction} placeholder="Search" />

        </InputGroup>
        <span className="position-absolute search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></span>



        <style type="text/css">
            {`
                .input-search{
                  border-radius: 25px;
                }
                .search
                {
                    right:10px;
                    top:5px;
                }
                .errspan {
                    float: right;
                    margin-right: 6px;
                    margin-top: -20px;
                    position: relative;
                    z-index: 2;
                    color: red;
                }
            `}

        </style>
    </div>);
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ gameSearch: gameSearch }, dispatch)
}
//Component to dipslay Search bar and send the search value to store
export default connect(null, matchDispatchToProps)(SearchBarComponent);