import './App.css';
import {Button, Card, CardContent, Container, Grid2, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";
import ShowPokemonStats from "./components/showPokemonStats";
import {opponentSelectService} from "./services/pokemonService";
import {battleStart} from "./api/apiBattle";

function App() {
    const [pokemons, setPokemons] = useState();
    const [pokemonSelected, setPokemonSelected] = useState();
    const [pokemonOpponent, setPokemonOpponent] = useState();
    const [pokemonTurn, setPokemonTurn] = useState();
    const [finish, setFinish] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(response => setPokemons(response.data))
            .catch(error => console.error("error al obtener los pokemon: ", error))
    }, []);

    const handleCardClick = (pokemon) => {
        setPokemonSelected(pokemon);
        setPokemonTurn();
        opponentSelect(pokemon);
    };

    const opponentSelect = (pokemon) => {
        const opponent = pokemons[opponentSelectService(pokemons)];
        if (opponent.name !== pokemon.name ){
            setPokemonOpponent(opponent);
            return ;
        }
        opponentSelect(pokemon);
    }

    const handleBattleButtonClick = () => {
        setPokemonTurn(battleStart(pokemonSelected, pokemonOpponent, setPokemonTurn, setFinish))
    }
  return (
      <Container fixed className={"app-container"}>
          <header>
              <h1>Battle of Pokemon</h1>
              <p>Select your pokemon</p>
          </header>
          <div className="card-container-list">
              {pokemons?.map((item, index) => (
                  <Card
                      key={index}
                      variant="outlined"
                      onClick={() => handleCardClick(item)}
                      style={{ cursor: 'pointer' }}
                      className={"pokemon-card"}
                  >
                      <CardContent className={`card-content-list`}>
                          <img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
                          <Typography className={item.name} color="textSecondary" variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                              {item.name}
                          </Typography>
                      </CardContent>
                  </Card>
              ))}
          </div>

          {pokemonTurn ? (
              <div className="winner-announcement">
                  <Typography variant="h6" className="winner-text">
                      {pokemonTurn.name} {finish ? "wins!" : "first hit" }
                  </Typography>
              </div>
          ): null }


          {pokemonSelected ? (
              <div className={"battle-camp-container"}>
                  <Grid2 item xs={"6"}>
                      <ShowPokemonStats pokemon={pokemonSelected} pokemonTurn={pokemonTurn}/>
                  </Grid2>
                  <Grid2 item xs={4} alignSelf="center">
                      <Button
                          className={`style-green-button color-button-active`}
                          onClick={handleBattleButtonClick}
                      >
                          Start Battle
                      </Button>
                  </Grid2>
                  <Grid2 item xs={"6"}>
                      <ShowPokemonStats pokemon={pokemonOpponent} pokemonTurn={pokemonTurn}/>
                  </Grid2>
              </div>
        ) : null

}



      </Container>
  );
}

export default App;
