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

        /*
         * IMPORTANT:
         * Keep the card within the visible Products section.
         */
        height: {
          xs: "330px",
          sm: "350px",
          md: "370px",
          lg: "390px",
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
      {/* =====================================================
          PRODUCT IMAGE
          ===================================================== */}

      {product.image && (
        <Box
          component="img"
          className="product-parallax-img"
          src={product.image}
          alt={product.title}
          sx={{
            position: "absolute",

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

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

      {/* =====================================================
          DARK GRADIENT
          ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          left: 0,
          right: 0,
          bottom: 0,

          height: "60%",

          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.68) 35%, rgba(0, 0, 0, 0.15) 75%, rgba(0, 0, 0, 0) 100%)",

          zIndex: 2,

          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          PRODUCT CONTENT
          ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          left: 0,
          right: 0,
          bottom: 0,

          zIndex: 3,

          boxSizing: "border-box",

          /*
           * Responsive padding.
           */
          p: {
            xs: "16px",
            sm: "18px",
            md: "20px",
            lg: "22px",
          },

          color: "#FFFFFF",

          /*
           * Keep the content inside the card.
           */
          width: "100%",

          display: "flex",

          flexDirection: "column",

          justifyContent: "flex-end",
        }}
      >
        {/* =================================================
            PRODUCT TITLE
            ================================================= */}

        <Typography
          component="h3"
          sx={{
            margin: 0,

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

            /*
             * IMPORTANT:
             * Do not clip the title.
             */
            overflow: "visible",

            textOverflow: "unset",

            whiteSpace: "normal",

            wordBreak: "break-word",

            display: "block",
          }}
        >
          {product.title}
        </Typography>

        {/* =================================================
            PRODUCT SUBTITLE
            ================================================= */}

        {product.subtitle && (
          <Typography
            component="p"
            sx={{
              margin: 0,

              marginTop: "6px",

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

              maxWidth: "100%",
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