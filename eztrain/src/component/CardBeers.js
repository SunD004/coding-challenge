import React from 'react'

import { useDispatch } from 'react-redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

import { setBeer } from '../app/beersSlice'

import '../App.css';

function CardBeers({ beers }) {
    const dispatch = useDispatch()
    const history = useHistory();

    const handleDetails = (beer) => {
        dispatch(setBeer(beer))
        history.push(`/beer/${beer.name}`)
    }

    return beers.map((beer, index) => {
        return (
            <Card style={{
                marginLeft: "20px",
                marginRight: "20px",
                height: "450px",
                width: "40%",
                marginTop: index === 0 && 15,
                marginBottom: index === beers.length - 1 && 15
            }} key={parseInt(beer.id)}>
                <div style={{
                    marginTop: 10,
                    marginBottom: 10,
                    width: "330px"
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon name="hand point right outline" size="large" color="black" />
                            <p style={{ fontSize: 17 }}>{beer.brewers_tips}
                            </p>
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href style={{ fontSize: 20 }} onClick={() => handleDetails(beer)}>
                        <Icon name='angle right' />
                        Details
                    </a>
                </Card.Content>
            </Card>
        )
    })
}

export default CardBeers;
