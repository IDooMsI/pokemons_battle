import {Box, Card, CardContent, LinearProgress, Typography} from "@mui/material";
import LineProgressBarBox from "./lineProgressBarBox";

const showPokemonStats = ({pokemon, pokemonTurn}) => {
    const omitProps = ['name', 'id', 'type', 'weaknesses', 'imageUrl'];
    let loser= false;
    if (pokemonTurn && pokemonTurn.name !== pokemon.name){
        loser = true;
    }

    return (
        <Card key={pokemon.name} variant="outlined" className={"pokemon-card"}>
            <CardContent
                className={`card-content-list`}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    filter: loser ? 'grayscale(100%)' : ''
                }}
            >
                <img
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    style={{ width: '60%' }}
                    className={"pokemon-img"}
                />

                <Typography
                    className={pokemon.name}
                    color="textSecondary"
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold' }}
                >
                    {pokemon.name}
                </Typography>

                {Object.entries(pokemon)
                    .filter(([key]) => !omitProps.includes(key))
                    .map(([key, value]) => (
                        <LineProgressBarBox currentHealth={value} statName={key}/>
                    ))}
            </CardContent>
        </Card>
    );
};

export default showPokemonStats;