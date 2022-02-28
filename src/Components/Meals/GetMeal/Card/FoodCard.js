import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function FoodCard({data}) {
  return (
    <Card style={{ width: "300px" }} key={data.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="Meals"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{data.meal_name}</Typography>
          <Typography variant="body2" color="text.secondary">
              {data.meal_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
