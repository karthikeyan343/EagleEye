import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Snackbar,
  Stack,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { GoogleMap } from "./GoogleMap";
import submitContactInquiry from "../../services/contact.service";
import {
  isValidEmail,
  isValidPhone,
  isValidName,
} from "../../utils/validation";
import {
  ContactFormData,
  FormErrors,
} from "../../types/contact";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    null
  );

  // ============================================================
  // FORM VALIDATION
  // ============================================================

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // ----------------------------------------------------------
    // NAME
    // ----------------------------------------------------------

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required";
    } else if (!isValidName(formData.name)) {
      newErrors.name =
        "Please enter a valid name using letters only.";
    }

    // ----------------------------------------------------------
    // EMAIL
    // ----------------------------------------------------------

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email =
        "Please enter a valid email address";
    }

    // ----------------------------------------------------------
    // PHONE
    // ----------------------------------------------------------

    if (formData.phone.trim()) {
      if (!isValidPhone(formData.phone)) {
        newErrors.phone =
          "Please enter a valid phone number";
      }
    }

    // ----------------------------------------------------------
    // MESSAGE
    // ----------------------------------------------------------

    if (!formData.message.trim()) {
      newErrors.message =
        "Please provide a message or inquiry details";
    } else if (formData.message.trim().length < 5) {
      newErrors.message =
        "Message must be at least 5 characters";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message =
        "Message cannot exceed 2000 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ============================================================
  // GENERIC INPUT CHANGE
  // ============================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // ============================================================
  // NAME CHANGE
  // Numbers and unwanted special characters are removed
  // while the user is typing.
  // ============================================================

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(
      /[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g,
      ""
    );

    setFormData((prev) => ({
      ...prev,
      name: value,
    }));

    if (errors.name) {
      setErrors((prev) => ({
        ...prev,
        name: undefined,
      }));
    }
  };

  // ============================================================
  // SUBMIT
  // ============================================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setErrorMessage(null);
    setSubmitSuccess(false);

    // Validate before sending request
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactInquiry(formData);

      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Network error. Please try again.";

      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        width: "100%",
        py: {
          xs: 7,
          sm: 8,
          md: 10,
          lg: 12,
        },
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 6,
          },
        }}
      >
        <Grid
          container
          spacing={{
            xs: 6,
            md: 8,
            lg: 10,
          }}
          alignItems="stretch"
        >
          {/* ====================================================
              LEFT COLUMN
              ==================================================== */}

          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "680px",
              }}
            >
              {/* ------------------------------------------------
                  HEADER
                  ------------------------------------------------ */}

              <Box
                sx={{
                  mb: {
                    xs: 4,
                    md: 5,
                  },
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontFamily:
                      "'Trueno', 'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      xs: "28px",
                      sm: "32px",
                      md: "36px",
                      lg: "40px",
                    },
                    lineHeight: {
                      xs: 1.25,
                      md: 1.2,
                    },
                    letterSpacing: "0%",
                    color: "#000000",
                    mb: 1.5,
                  }}
                >
                  Get in touch with us.
                  <br />
                  We're here to assist you.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "#64748B",
                    fontSize: {
                      xs: "13.5px",
                      sm: "14px",
                      md: "14.5px",
                    },
                    lineHeight: 1.7,
                    maxWidth: "560px",
                  }}
                >
                  Fill out the form below and our security
                  engineers will respond within 24 hours.
                </Typography>
              </Box>

              {/* ------------------------------------------------
                  ERROR MESSAGE
                  ------------------------------------------------ */}

              {errorMessage && (
                <Alert
                  severity="error"
                  sx={{
                    mb: 3,
                    borderRadius: "12px",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                  onClose={() => setErrorMessage(null)}
                >
                  {errorMessage}
                </Alert>
              )}

              {/* ------------------------------------------------
                  SUCCESS MESSAGE
                  ------------------------------------------------ */}

              {submitSuccess && (
                <Alert
                  icon={
                    <CheckCircleOutlineIcon
                      fontSize="inherit"
                    />
                  }
                  severity="success"
                  sx={{
                    mb: 3,
                    borderRadius: "12px",
                    fontFamily: "'Manrope', sans-serif",
                  }}
                  onClose={() => setSubmitSuccess(false)}
                >
                  Thank you! Your message has been received.
                  Our team will contact you shortly.
                </Alert>
              )}

              {/* ==================================================
                  CONTACT FORM
                  ================================================== */}

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
              >
                <Stack spacing={3}>
                  {/* =================================================
                      NAME + EMAIL
                      ================================================= */}

                  <Grid
                    container
                    spacing={2}
                  >
                    {/* NAME */}

                    <Grid
                      item
                      xs={12}
                      sm={6}
                    >
                      <TextField
                        fullWidth
                        id="contact-name"
                        name="name"
                        label="Your Name"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleNameChange}
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                        variant="standard"
                        inputProps={{
                          maxLength: 100,
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          sx: {
                            fontFamily:
                              "'Manrope', sans-serif",
                            fontSize: "15px",
                            py: 1,
                          },
                        }}
                      />
                    </Grid>

                    {/* EMAIL */}

                    <Grid
                      item
                      xs={12}
                      sm={6}
                    >
                      <TextField
                        fullWidth
                        id="contact-email"
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="e.g. john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        variant="standard"
                        inputProps={{
                          maxLength: 254,
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          sx: {
                            fontFamily:
                              "'Manrope', sans-serif",
                            fontSize: "15px",
                            py: 1,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* =================================================
                      PHONE
                      ================================================= */}

                  <TextField
                    fullWidth
                    id="contact-phone"
                    name="phone"
                    label="Phone Number (Optional)"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    variant="standard"
                    inputProps={{
                      maxLength: 20,
                      inputMode: "tel",
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      sx: {
                        fontFamily:
                          "'Manrope', sans-serif",
                        fontSize: "15px",
                        py: 1,
                      },
                    }}
                  />

                  {/* =================================================
                      MESSAGE
                      ================================================= */}

                  <TextField
                    fullWidth
                    id="contact-message"
                    name="message"
                    label="Message"
                    placeholder="Tell us about your security requirements..."
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={
                      errors.message ||
                      `${formData.message.length}/2000`
                    }
                    variant="standard"
                    inputProps={{
                      maxLength: 2000,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      sx: {
                        fontFamily:
                          "'Manrope', sans-serif",
                        fontSize: "15px",
                        py: 1,
                      },
                    }}
                  />

                  {/* =================================================
                      SUBMIT BUTTON
                      ================================================= */}

                  <Box sx={{ pt: 1 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress
                            size={18}
                            color="inherit"
                          />
                        ) : (
                          <ArrowForwardIcon />
                        )
                      }
                      sx={{
                        backgroundColor: "#0052FF",
                        color: "#FFFFFF",
                        height: "46px",
                        borderRadius: "12px",
                        px: "28px",
                        py: "12px",
                        fontFamily:
                          "'Manrope', sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        textTransform: "none",
                        transition:
                          "all 0.25s ease",
                        boxShadow:
                          "0 8px 20px rgba(0, 82, 255, 0.18)",

                        "&:hover": {
                          backgroundColor: "#0042D0",
                          transform:
                            "translateY(-2px)",
                          boxShadow:
                            "0 12px 25px rgba(0, 82, 255, 0.25)",
                        },

                        "&:disabled": {
                          backgroundColor: "#94A3B8",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {isSubmitting
                        ? "Sending..."
                        : "Reach Us"}
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* ====================================================
              RIGHT COLUMN — GOOGLE MAP
              ==================================================== */}

          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                minHeight: {
                  xs: "300px",
                  sm: "350px",
                  md: "380px",
                  lg: "400px",
                },
              }}
            >
              <GoogleMap />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ========================================================
          SUCCESS SNACKBAR
          ======================================================== */}

      <Snackbar
        open={submitSuccess}
        autoHideDuration={6000}
        onClose={() => setSubmitSuccess(false)}
        message="Your inquiry has been successfully transmitted to Eagle Eye Solution."
      />
    </Box>
  );
};

export default ContactSection;