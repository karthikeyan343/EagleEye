import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Product } from '../../types/product';

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onGetQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  open,
  onClose,
  onGetQuote,
}) => {
  if (!product) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: product.bgColor,
          p: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: '240px',
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            color: '#FFFFFF',
            backgroundColor: 'rgba(0,0,0,0.2)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            maxHeight: '100%',
            maxWidth: '80%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))',
          }}
        />
      </Box>

      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <Chip
            label={product.category}
            size="small"
            sx={{
              backgroundColor: '#0052FF',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '11px',
            }}
          />
          {product.badge && (
            <Chip
              label={product.badge}
              size="small"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '11px' }}
            />
          )}
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Trueno', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
          }}
        >
          {product.title}
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        <Typography variant="body1" sx={{ color: '#475569', mb: 2, lineHeight: 1.6 }}>
          {product.description}
        </Typography>

        {product.specs && (
          <Box sx={{ mt: 2, p: 2, backgroundColor: '#F8FAFC', borderRadius: '14px' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#0F172A' }}>
              Key Technical Specifications:
            </Typography>
            <List dense disablePadding>
              {product.specs.map((spec, index) => (
                <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon color="primary" sx={{ fontSize: 18 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={spec}
                    primaryTypographyProps={{
                      fontSize: '13.5px',
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
        <Button onClick={onClose} sx={{ color: '#64748B' }}>
          Close
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            onClose();
            onGetQuote(product.title);
          }}
          sx={{
            backgroundColor: '#0052FF',
            color: '#FFFFFF',
            borderRadius: '12px',
            px: 3,
            fontWeight: 600,
            '&:hover': { backgroundColor: '#0042D0' },
          }}
        >
          Request Quote
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
