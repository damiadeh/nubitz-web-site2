import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
      },
      root: {
        minHeight: "55px",
      }
    },
    MuiTimeline: {
      root: {
        padding: "6px 0",
      }
    },
  },
});

export default Theme;
