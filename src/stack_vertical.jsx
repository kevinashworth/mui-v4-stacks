import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  stackRoot: {
    display: "flex",
    flexDirection: "column",
    "& > $stackItem:first-child": {
      marginTop: (props) => props.gutters ? props.spacing : 0,
    },
    "& > $stackItem:last-child": {
      marginBottom: (props) => props.gutters ? props.spacing : 0,
    },
  },
  stackItem: {
    marginBottom: (props) => props.spacing / 2,
    marginTop: (props) => props.spacing / 2,
  },
}));

const VerticalStack = React.forwardRef((props, ref) => {
  const {
    align,
    children,
    ChildProps = {},
    className,
    gutters = true,
    spacing = 0,
    ...rest
  } = props;
  const classes = useStyles({ gutters, spacing });
  const rootClassName = clsx({
    [classes.stackRoot]: true,
    [className]: className,
  });

  return (
    <Box alignItems={align} className={rootClassName} ref={ref} {...rest}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        const { flexGrow } = child.props; // TODO: any other props?
        const itemClassName = clsx(classes.stackItem, ChildProps.className);
        return (
          <Box {...ChildProps} className={itemClassName} flexGrow={flexGrow}>
            {child}
          </Box>
        );
      })}
    </Box>
  );
});

VerticalStack.propTypes = {
  align: PropTypes.oneOf([
    "baseline",
    "center",
    "end",
    "flex-end",
    "flex-start",
    "self-end",
    "self-start",
    "start",
    "stretch",
  ]), // shorthand for alignItems
  children: PropTypes.node,
  ChildProps: PropTypes.object,
  className: PropTypes.string,
  gutters: PropTypes.bool,
  spacing: PropTypes.number, // number of pixels
};

VerticalStack.displayName = "VStack";

export default VerticalStack;
