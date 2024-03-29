import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`, //mobile
          lg: `"nav nav" "aside main"`, //1024px
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
