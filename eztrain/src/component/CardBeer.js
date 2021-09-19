import React from 'react'

import { useDispatch } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

import { setBeer } from '../app/beersSlice'

import '../App.css';

function CardBeers({ beer }) {
    const dispatch = useDispatch()
    const history = useHistory();

    const handleGoback = () => {
        dispatch(setBeer({}))
        history.push(`/`)
    }

    console.log(beer)
    if (Object.keys(beer).length === 0) {
        history.push('/')
        return null
    }

    return (
        <Card style={{
            marginLeft: "20px",
            marginRight: "20px",
            width: "40%"
        }} key={parseInt(beer.id)}>
            <div style={{
                marginTop: 10,
                marginBottom: 10,
                width: "100%"
            }}>
                <Image size="mini" src={beer.image_url} wrapped />
                <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 20, right: 20 }}>
                    <Icon name="tint" size="large" color="yellow" />
                    <p style={{ fontSize: 17, color: "black", fontWeight: "bold", fontStyle: "italic" }}>{beer.ph}%</p>
                </div>
            </div>
            <Card.Content>
                <Card.Header style={{ fontSize: 20 }}>{beer.name}</Card.Header>
                <Card.Meta>
                    <span style={{ fontSize: 19 }} className='date'>First brewed in {beer.first_brewed}</span>
                </Card.Meta>
                <Card.Description>
                    <div className="cardBeerFlexHorizontalContent"
                    >
                        <Icon name="hand point right outline" size="large" color="black" />
                        <p style={{ fontSize: 17 }}>{beer.brewers_tips}
                        </p>
                    </div>
                    <hr />
                    <div className="cardBeerFlexHorizontalContent">
                        <Icon name="sticky note outline" size="large" color="black" />
                        <p style={{ fontSize: 17 }}>{beer.description}
                        </p>
                    </div>
                    <hr />
                    <div className="cardBeerFlexHorizontalContent">
                        <Icon name="user outline" size="large" color="black" />
                        <p style={{ fontSize: 17 }}>Contributed by {beer.contributed_by}
                        </p>
                    </div>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href style={{ fontSize: 20 }} onClick={handleGoback}>
                    <Icon name='angle left' />
                    Back
                </a>
            </Card.Content>
        </Card>
    )
}

export default CardBeers;
