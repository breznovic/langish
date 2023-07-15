import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import s from "./Card.module.css";
import { Stack } from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14, ml: 10, mb: 3, pt: 5 }}
        color="text.secondary"
        gutterBottom
      >
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div" sx={{ ml: 9, mt: 2, mb: 3 }}>
        benevolent
      </Typography>
      <Typography variant="body2" sx={{ ml: 7, mt: 2 }}>
        well meaning and kindly
      </Typography>
    </CardContent>
    <CardActions sx={{ ml: -2.6, mt: 2, pb: 5, pl: 4, pr: 20 }}>
      <Stack spacing={1} direction="row">
        <div className={s.button}>
          <Button size="medium" variant="outlined" color="success">
            Already know
          </Button>
        </div>
        <div className={s.button}>
          <Button size="medium" variant="outlined" color="secondary">
            Next word
          </Button>
        </div>
      </Stack>
    </CardActions>
  </React.Fragment>
);

export default function EducationCard() {
  return (
    <div className={s.card}>
      <Box sx={{ maxWidth: 300 }}>
        <Card variant="elevation">{card}</Card>
      </Box>
    </div>
  );
}
