import React from "react";
import { Box, Typography } from "@mui/material";

import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",

        height: {
          xs: "410px",
          sm: "380px",
          md: "360px",
          lg: "310px",
        },

        borderRadius: {
          xs: "22px",
          md: "26px",
        },

        overflow: "hidden",

        backgroundColor:
          product.bgColor || "#f0f0f0",

        flexShrink: 0,

        boxShadow:
          "0 12px 32px rgba(0, 0, 0, 0.12)",

        transition:
          "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1)",

        "&:hover": {
          transform:
            "translateY(-6px) scale(1.02)",

          boxShadow:
            "0 22px 45px rgba(0, 0, 0, 0.2)",

          "& .product-parallax-img": {
            transform: "scale(1.08)",
          },
        },
      }}
    >
      {product.image && (
        <Box
          component="img"
          className="product-parallax-img"
          src={product.image}
          alt={product.title}
          sx={{
            position: "absolute",
            inset: 0,

            width: "100%",
            height: "100%",

            objectFit: "cover",
            objectPosition: "center",

            display: "block",

            zIndex: 1,

            transition:
              "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",

            willChange: "transform",
          }}
        />
      )}

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          zIndex: 2,

          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.68) 35%, rgba(0, 0, 0, 0.15) 75%, rgba(0, 0, 0, 0) 100%)",

          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          zIndex: 3,

          boxSizing: "border-box",

          width: "100%",
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",

          alignItems: "flex-start",

          px: {
            xs: 2,
            sm: 2.25,
            md: 2.75,
            lg: 3,
          },

          pb: {
            xs: 2,
            sm: 2.25,
            md: 2.75,
            lg: 3,
          },

          color: "#FFFFFF",
        }}
      >
        <Typography
          component="h3"
          sx={{
            m: 0,

            width: "100%",
            maxWidth: "100%",

            fontFamily:
              '"Trueno", "Sora", sans-serif',

            fontWeight: 700,

            fontSize: {
              xs: "18px",
              sm: "20px",
              md: "22px",
              lg: "24px",
            },

            lineHeight: 1.2,

            letterSpacing: "-0.02em",

            color: "#FFFFFF",

            textShadow:
              "0 2px 8px rgba(0,0,0,0.6)",

            whiteSpace: "normal",

            wordBreak: "break-word",

            overflowWrap: "break-word",
          }}
        >
          {product.title}
        </Typography>

        {product.subtitle && (
          <Typography
            component="p"
            sx={{
              m: 0,

              mt: 0.75,

              width: "100%",
              maxWidth: "100%",

              fontFamily:
                '"Manrope", sans-serif',

              fontWeight: 400,

              fontSize: {
                xs: "10px",
                sm: "11px",
                md: "12px",
                lg: "13px",
              },

              lineHeight: 1.45,

              color:
                "rgba(255, 255, 255, 0.92)",

              textShadow:
                "0 1px 5px rgba(0,0,0,0.6)",

              display: "-webkit-box",

              WebkitBoxOrient:
                "vertical",

              WebkitLineClamp: 2,

              overflow: "hidden",
            }}
          >
            {product.subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;