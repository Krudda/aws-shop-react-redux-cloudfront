import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "545px",
        }}
      >
        <CircularProgress sx={{ color: "#ffe490" }} />
      </Box>
    );
  }

  return (
    <Grid container spacing={4}>
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {data.map((product) => {
        return (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "545px", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                sx={{ height: "445px" }}
                image={product.poster}
                title="Image title"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography>{formatAsPrice(product.price)}</Typography>
              </CardContent>
              <CardActions>
                <AddProductToCart product={product} />
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
