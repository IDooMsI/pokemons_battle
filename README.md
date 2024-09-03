## Project setup

```bash
$ npm install
```
## Compile and run the project backend

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run Migrations

```bash
$ npm run migration:run
```
## Compile and run the project front
```bash
$ npm run start                                                                                                                                                                                                                    
```

## Description
Es una aplicación basada en React para el frontend y NestJS para el backend se comunican a través de una API REST. El objetivo es determinar cuál Pokémon es más fuerte, basándose en su velocidad (para decidir el turno), su ataque, defensa y debilidades.

Primero, se selecciona un Pokémon de preferencia, y luego se elige aleatoriamente un contrincante. A continuación, se inicia la batalla presionando el botón "Start Battle".

Una vez que el backend termina de realizar cálculos complejos según las estadísticas de cada Pokémon en combate, se decide un ganador y se comunica al frontend.

El frontend muestra el nombre del ganador y atenúa al Pokémon perdedor como una forma de humillación.

Para reiniciar, se debe seleccionar un nuevo Pokémon.
