import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import HStack from "./stack_horizontal";
import VStack from "./stack_vertical";

const useStyles = makeStyles((theme) => ({
  bordered: {
    border: "1px solid navy",
    marginBottom: 16,
    padding: 8,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <VStack
        align="center"
        ChildProps={{ className: classes.bordered }}
        className={classes.bordered}
        spacing={32}
      >
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
      </VStack>
      <HStack
        align="flex-end"
        ChildProps={{ className: classes.bordered }}
        gutters={false}
        spacing={0}
      >
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
      </HStack>
    </Container>
  );
}

export default App;
