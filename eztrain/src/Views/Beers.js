import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { setBeers } from '../app/beersSlice'

import { Icon } from 'semantic-ui-react'

import Loader from '../component/Loader'
import CardBeers from '../component/CardBeers'

import '../App.css';

function Beers() {
  const beers = useSelector(state => state.beerStore.beers)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://api.punkapi.com/v2/beers').then(({ data }) => dispatch(setBeers(data)))
    }, 2000)
  }, [dispatch]);

  return beers.length === 0 ?
    <div className="App">
      <header className="App-header">
        <Loader text={"Beers is coming "} icon={<Icon name="beer" size="small" color="yellow" />} />
      </header>
    </div> : (
      <div className="Beers">
        <div className="title">
          <Icon name="hand peace" size="huge" color="yellow" style={{ marginTop: '-45px', marginRight: "10px" }} />
          <p style={{ fontSize: "50px", fontWeight: "bold", fontStyle: "italic" }}>Our beers</p>
          <Icon name="beer" size="huge" color="yellow" style={{ marginTop: '-45px', marginLeft: "10px" }} />
        </div>
        <div className="App-header2" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
          <CardBeers beers={beers} />
        </div>
      </div>
    );
}

export default Beers;
