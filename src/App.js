import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h1">Hello World!</Typography>
        <Typography variant="body1">
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
