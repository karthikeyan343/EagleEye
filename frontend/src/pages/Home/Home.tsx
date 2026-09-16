import React, { useState } from "react";
import { Box } from "@mui/material";

import { Header } from "../../components/navigation/Header";
import { Hero } from "../../sections/home/Hero";
import { ProductsSection } from "../../sections/products/ProductsSection";
import { StatsSection } from "../../sections/home/StatsSection";
import { ServicesCarousel } from "../../sections/home/ServicesCarousel";
import { FeaturedWorks } from "../../sections/about/FeaturedWorks";
import { WhoWeAre } from "../../sections/about/WhoWeAre";
import { ContactSection } from "../../sections/contact/ContactSection";
import { Footer } from "../../sections/contact/Footer";

import { QuoteModal } from "../../components/ui/QuoteModal";
import { ProductModal } from "../../components/ui/ProductModal";

import { Product } from "../../types/product";

export const Home: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [quoteDefaultProduct, setQuoteDefaultProduct] =
    useState("");

  const handleOpenQuote = (defaultProd = "") => {
    setQuoteDefaultProduct(defaultProd);
    setQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteOpen(false);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        overflowX: "hidden",
      }}
    >
      {/* =====================================================
          FIRST VIEWPORT / HERO
          ===================================================== */}

      <Box
        sx={{
          position: "relative",

          width: "100%",

          height: "100dvh",

          minHeight: "600px",

          boxSizing: "border-box",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          overflow: "hidden",

          backgroundColor: "#ffffff",

          px: {
            xs: 1,
            sm: 2,
            md: 2.5,
            lg: 3.25,
          },

          py: {
            xs: 1,
            sm: 1.5,
            md: 2,
          },
        }}
      >
        {/* =================================================
            HERO FRAME
            ================================================= */}

        <Box
          id="home"
          sx={{
            position: "relative",

            width: "100%",

            maxWidth: "1552px",

            height: "100%",

            minHeight: 0,

            maxHeight: "100%",

            boxSizing: "border-box",

            overflow: "hidden",

            borderRadius: {
              xs: "20px",
              sm: "26px",
              md: "32px",
              lg: "36px",
            },

            backgroundColor: "#ffffff",
          }}
        >
          {/* =================================================
              NAVBAR
              
              IMPORTANT:
              Header is now INSIDE the Hero frame.
              This allows the navbar to use Hero-relative
              positioning like the mentor version.
              ================================================= */}

          <Header
            onOpenQuote={() => handleOpenQuote()}
          />

          {/* =================================================
              HERO
              ================================================= */}

          <Hero
            onExploreProducts={() =>
              scrollToSection("products")
            }
            onExploreServices={() =>
              scrollToSection("services")
            }
          />
        </Box>
      </Box>

      {/* =====================================================
          PRODUCTS
          ===================================================== */}

      <ProductsSection />

      {/* =====================================================
          STATISTICS
          ===================================================== */}

      <StatsSection />

      {/* =====================================================
          SERVICES
          ===================================================== */}

      <ServicesCarousel />

      {/* =====================================================
          FEATURED WORKS
          ===================================================== */}

      <FeaturedWorks />

      {/* =====================================================
          WHO WE ARE
          ===================================================== */}

      <WhoWeAre />

      {/* =====================================================
          CONTACT
          ===================================================== */}

      <ContactSection />

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <Footer />

      {/* =====================================================
          QUOTE MODAL
          ===================================================== */}

      <QuoteModal
        open={quoteOpen}
        onClose={handleCloseQuote}
        defaultProduct={quoteDefaultProduct}
      />

      {/* =====================================================
          PRODUCT MODAL
          ===================================================== */}

      <ProductModal
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={handleCloseProductModal}
        onGetQuote={(productTitle) =>
          handleOpenQuote(productTitle)
        }
      />
    </Box>
  );
};

export default Home;