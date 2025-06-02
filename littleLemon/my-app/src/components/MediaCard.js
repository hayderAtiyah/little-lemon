import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  imgSrc,
  imgTitle,
  imgDescription,
  imgMainTitle,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#495E57",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={imgSrc} title={imgTitle} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={4}
          fontWeight={700}
          letterSpacing={3}
          fontSize={30}
          sx={{ color: "#fff" }}
        >
          {imgMainTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          {imgDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#F4CE14" }}>
          Share
        </Button>
        <Button size="small" sx={{ color: "#F4CE14" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
