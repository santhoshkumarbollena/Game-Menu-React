import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from 'react-bootstrap/Container';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

}));

function GamesListComponent(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {

            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
    })

    function displayGames(games) {
        return (<GridList spacing={12} cellHeight={170} cols={(windowWidth) / 180}>
            {games.map((game) => (
                <GridListTile key={game.gameId} cols={game.cols || 1} rows={game.rows || 1}>

                    {game.new === true ?
                        game.highlimit === true ?

                            <div>
                                <img src={(game.imageUrl)} alt={game.gameName} />
                                <img src={(game.newUrl)} height="20" width="40" alt="new" className="inner-image-new" />
                                <img src={(game.highlimitUrl)} height="40" width="40" alt="highlimit" className="inner-image-highlimit" />
                            </div>

                            : <div>
                                <img src={(game.imageUrl)} alt={game.gameName} />
                                <img src={(game.newUrl)} height="20" width="40" alt="new" className="inner-image-new" />
                            </div>
                        : <img src={(game.imageUrl)} alt={game.gameName} />}


                </GridListTile>
            ))}
            <style type="text/css">
                {`div {
                    position: relative;
                    }

                .inner-image-new {
                position: absolute;
                top: 10px;
                left: 10px;
                }
                .inner-image-highlimit {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                }
                `}
            </style>
        </GridList>)
    }

    function listOfGames() {


        if (props.gameSearch && !(props.gameSearch.Search === "")) {
            const results = props.games.filter(game =>
                game.gameName.toLowerCase().includes(props.gameSearch.Search.toLowerCase())
            );
            return results;

        }

        if (props.activeFilter) {
            if (props.activeFilter.filter === "Top") {

                const results = props.games.sort((a, b) => (a.gameRating > b.gameRating) ? -1 : 1)

                return results;
            } else if (props.activeFilter.filter === "New") {
                const results = props.games.sort((a, b) => b.gameReleaseDate - a.gameReleaseDate)

                return results;
            }
        }

        return props.games;

    }

    const classes = useStyles();

    return (
        <Container fluid>
            <div>

                <div className={classes.root}>

                </div>

                {displayGames(listOfGames())}


            </div>
        </Container>

    );
}

function mapStateToProps(state) {
    return {
        games: state.games,
        activeFilter: state.activeGameFilter,
        gameSearch: state.gameSearch
    }
}
//Component to display image grid
export default connect(mapStateToProps)(GamesListComponent);
