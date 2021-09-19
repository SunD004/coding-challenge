import React from 'react'

import { useSelector } from 'react-redux'
import { Icon } from 'semantic-ui-react'

import CardBeer from '../component/CardBeer'

import '../App.css';

function Beer() {
  const beer = useSelector(state => state.beerStore.beer)

  return (
    <div className="Beers">
      <div className="title">
        <p style={{ fontSize: "50px", fontWeight: "bold", fontStyle: "italic" }}>{beer.name} beer</p>
        <Icon name="beer" size="huge" color="yellow" style={{ marginTop: '-45px', marginLeft: "10px" }} />
      </div>
      <div className="App-header2" style={{ overflowX: 'hidden', overflowY: 'hidden', justifyContent: 'center' }}>
        <CardBeer beer={beer} />
      </div>
    </div>
  );
}

export default Beer;
