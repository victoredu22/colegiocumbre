import Slider from "react-slick";
import { Box, IconButton, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const images = [
  "./assets/img/cumbre1.jpg",
  "./assets/img/cumbre2.jpg",
  "./assets/img/cumbre3.jpg",
  "./assets/img/cumbre4.jpg",

  "./assets/img/integracion2.jpg",
  "./assets/img/integracion4.jpg",
];

// Flechas personalizadas
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 2,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 2,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.4)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

export const Burbujas = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "auto",
        margin: "0 auto",
        padding: "40px 0",
        position: "relative",
      }}
      bgcolor="#F5F5F5"
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "20px" }}
        color="primary"
      >
        Conózcanos y formen parte de nuestra familia
      </Typography>
      <Box sx={{ width: "100%", margin: "auto", marginTop: "3%" }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                height: 300, // Tamaño cuadrado
                padding: "10px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
