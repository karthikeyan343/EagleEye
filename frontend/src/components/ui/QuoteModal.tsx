import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Alert,
  CircularProgress,
  MenuItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { contactService } from "../../services/contact.service";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

const solutions = [
  "AI ANPR Cameras",
  "Breath Analyser Access Systems",
  "CCTV Surveillance Network",
  "AI PTZ Smart Tracking",
  "Digital Weighbridge / Scale Integration",
  "Security Patrol Drones",
  "Comprehensive Security AMC",
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  open,
  onClose,
  defaultProduct = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: defaultProduct || "AI ANPR Cameras",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!name) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      setError("Name can contain letters and spaces only.");
      return;
    }

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must contain exactly 10 digits.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await contactService.submitQuote({
        ...formData,
        name,
        email,
        phone,
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();

        setFormData({
          name: "",
          email: "",
          phone: "",
          requirement: "AI ANPR Cameras",
          message: "",
        });
      }, 2500);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Error submitting request."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "11px",
      backgroundColor: "#FFFFFF",
      minHeight: 48,

      "& fieldset": {
        borderColor: "#D1D5DB",
      },

      "&:hover fieldset": {
        borderColor: "#94A3B8",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#0052FF",
        borderWidth: "1px",
      },
    },

    "& .MuiInputLabel-root": {
      color: "#64748B",
      fontSize: "14px",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#0052FF",
    },

    "& .MuiOutlinedInput-input": {
      color: "#111827",
      fontSize: {
        xs: "14px",
        sm: "15px",
      },
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth
      aria-labelledby="quote-modal-title"
      sx={{
        "& .MuiDialog-container": {
          padding: {
            xs: "10px",
            sm: "16px",
          },
        },
      }}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: "850px",
          maxHeight: "calc(100dvh - 32px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: {
            xs: "18px",
            sm: "24px",
          },
          backgroundColor: "#FFFFFF",
          boxShadow: "0 25px 70px rgba(0,0,0,0.28)",
          margin: 0,
        },
      }}
    >
      <DialogTitle
        id="quote-modal-title"
        sx={{
          flexShrink: 0,
          px: {
            xs: 2.5,
            sm: 4,
          },
          pt: {
            xs: 2,
            sm: 2.5,
          },
          pb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          component="div"
          sx={{
            fontFamily:
              "'Trueno', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "20px",
              sm: "24px",
            },
            lineHeight: 1.25,
            color: "#0F172A",
          }}
        >
          Request an Enterprise Quote
        </Typography>

        <IconButton
          aria-label="close"
          onClick={onClose}
          size="small"
          sx={{
            flexShrink: 0,
            width: 40,
            height: 40,
            color: "#64748B",
            borderRadius: "50%",

            "&:hover": {
              backgroundColor: "#F1F5F9",
              color: "#0F172A",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          flex: 1,
        }}
      >
        <DialogContent
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",

            px: {
              xs: 2.5,
              sm: 4,
            },

            py: {
              xs: 1,
              sm: 1.5,
            },

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Typography
            component="p"
            sx={{
              m: 0,
              mb: {
                xs: 2,
                sm: 2.5,
              },
              color: "#64748B",
              fontFamily: "'Manrope', sans-serif",
              fontSize: {
                xs: "13px",
                sm: "15px",
              },
              lineHeight: 1.55,
              maxWidth: "720px",
            }}
          >
            Get custom pricing and engineering consultation
            tailored to your security requirements.
          </Typography>

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 2,
                borderRadius: "10px",
                fontSize: "13px",
              }}
            >
              {error}
            </Alert>
          )}

          {success && (
            <Alert
              icon={<CheckCircleOutlineIcon />}
              severity="success"
              sx={{
                mb: 2,
                borderRadius: "10px",
                fontSize: "13px",
              }}
            >
              Quote request received! Our engineers will
              contact you shortly.
            </Alert>
          )}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              columnGap: {
                xs: 0,
                sm: 2,
              },
              rowGap: {
                xs: 1.8,
                sm: 2,
              },
            }}
          >
            <TextField
              label="Full Name"
              name="name"
              required
              fullWidth
              value={formData.name}
              onChange={handleChange}
              size="small"
              autoComplete="name"
              inputProps={{
                maxLength: 60,
              }}
              sx={inputSx}
            />

            <TextField
              label="Work Email"
              name="email"
              type="email"
              required
              fullWidth
              value={formData.email}
              onChange={handleChange}
              size="small"
              autoComplete="email"
              sx={inputSx}
            />

            <TextField
              label="Phone Number"
              name="phone"
              required
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              size="small"
              autoComplete="tel"
              inputMode="numeric"
              placeholder="10 digit number"
              inputProps={{
                maxLength: 10,
                inputMode: "numeric",
              }}
              sx={inputSx}
            />

            <TextField
              select
              label="Solution of Interest"
              name="requirement"
              fullWidth
              value={formData.requirement}
              onChange={handleChange}
              size="small"
              sx={inputSx}
            >
              {solutions.map((solution) => (
                <MenuItem
                  key={solution}
                  value={solution}
                >
                  {solution}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Project Scope / Details"
              name="message"
              multiline
              minRows={3}
              maxRows={5}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              size="small"
              placeholder="Locations, camera count, deployment timeline, etc."
              sx={{
                ...inputSx,
                gridColumn: {
                  xs: "auto",
                  sm: "1 / -1",
                },

                "& .MuiOutlinedInput-root": {
                  ...inputSx[
                    "& .MuiOutlinedInput-root"
                  ],
                  alignItems: "flex-start",
                  minHeight: {
                    xs: "92px",
                    sm: "100px",
                  },
                  paddingTop: "12px",
                },

                "& textarea": {
                  lineHeight: 1.5,
                },
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            flexShrink: 0,

            px: {
              xs: 2.5,
              sm: 4,
            },

            py: {
              xs: 2,
              sm: 2.5,
            },

            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,

            borderTop: "1px solid #F1F5F9",
          }}
        >
          <Button
            type="button"
            onClick={onClose}
            disabled={loading}
            sx={{
              minWidth: {
                xs: 80,
                sm: 90,
              },
              height: 44,
              color: "#64748B",
              borderRadius: "10px",
              textTransform: "none",
              fontFamily: "'Manrope', sans-serif",
              fontSize: {
                xs: "14px",
                sm: "15px",
              },
              fontWeight: 500,

              "&:hover": {
                backgroundColor: "#F8FAFC",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            endIcon={
              loading ? (
                <CircularProgress
                  size={17}
                  color="inherit"
                />
              ) : (
                <ArrowForwardIcon
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                    },
                  }}
                />
              )
            }
            sx={{
              minWidth: {
                xs: 155,
                sm: 180,
              },
              height: 44,
              px: {
                xs: 2,
                sm: 3,
              },
              backgroundColor: "#0052FF",
              color: "#FFFFFF",
              borderRadius: "11px",
              textTransform: "none",
              fontFamily: "'Manrope', sans-serif",
              fontSize: {
                xs: "14px",
                sm: "15px",
              },
              fontWeight: 600,
              boxShadow:
                "0 6px 18px rgba(0,82,255,0.20)",

              "&:hover": {
                backgroundColor: "#0042D0",
                boxShadow:
                  "0 8px 22px rgba(0,82,255,0.25)",
              },

              "&.Mui-disabled": {
                backgroundColor: "#93B4FF",
                color: "#FFFFFF",
              },
            }}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default QuoteModal;