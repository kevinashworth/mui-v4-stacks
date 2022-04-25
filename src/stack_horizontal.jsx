import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  stackRoot: {
    display: "flex",
    flexDirection: "row",
    "& > $stackItem:first-child": {
      marginLeft: (props) => (props.gutters ? props.spacing : 0),
    },
    "& > $stackItem:last-child": {
      marginRight: (props) => (props.guters ? props.spacing : 0),
    },
  },
  stackItem: {
    marginRight: (props) => props.spacing / 2,
    marginLeft: (props) => props.spacing / 2,
  },
}));

const HorizontalStack = React.forwardRef((props, ref) => {
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

HorizontalStack.propTypes = {
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
  gutters: PropTypes.bool, // false to exclude spacing on edges
  spacing: PropTypes.number, // number of pixels
};

HorizontalStack.displayName = "HStack";

export default HorizontalStack;
