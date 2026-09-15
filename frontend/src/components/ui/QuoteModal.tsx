import React, { useState } from 'react';
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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { contactService } from '../../services/contact.service';

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  open,
  onClose,
  defaultProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: defaultProduct || 'AI ANPR Cameras',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError('Please provide your name and email');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await contactService.submitQuote(formData);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();

        setFormData({
          name: '',
          email: '',
          phone: '',
          requirement: 'AI ANPR Cameras',
          message: '',
        });
      }, 2500);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : 'Error submitting request'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '24px',
          p: { xs: 2, sm: 3 },
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          overflowY: 'auto',

          '&::-webkit-scrollbar': {
            display: 'none',
          },

          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontFamily:
              "'Trueno', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
          }}
        >
          Request an Enterprise Quote
        </Typography>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <DialogContent sx={{ pt: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#64748B',
              mb: 3,
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
                borderRadius: '10px',
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
                borderRadius: '10px',
              }}
            >
              Quote request received! Our engineers will contact
              you shortly.
            </Alert>
          )}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
            }}
          >
            <TextField
              label="Full Name"
              name="name"
              required
              fullWidth
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />

            <TextField
              label="Work Email"
              name="email"
              type="email"
              required
              fullWidth
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />

            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              size="small"
            />

            <TextField
              select
              label="Solution of Interest"
              name="requirement"
              fullWidth
              value={formData.requirement}
              onChange={handleChange}
              size="small"
            >
              {[
                'AI ANPR Cameras',
                'Breath Analyser Access Systems',
                'CCTV Surveillance Network',
                'AI PTZ Smart Tracking',
                'Digital Weighbridge / Scale Integration',
                'Security Patrol Drones',
                'Comprehensive Security AMC',
              ].map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                >
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Project Scope / Details"
              name="message"
              multiline
              rows={3}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              size="small"
              placeholder="Locations, camera count, deployment timeline, etc."
            />
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            p: 2,
            pt: 0,
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              color: '#64748B',
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
                  size={16}
                  color="inherit"
                />
              ) : (
                <ArrowForwardIcon />
              )
            }
            sx={{
              backgroundColor: '#0052FF',
              color: '#FFFFFF',
              borderRadius: '12px',
              px: 3,
              py: 1,
              fontWeight: 600,

              '&:hover': {
                backgroundColor: '#0042D0',
              },
            }}
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default QuoteModal;
