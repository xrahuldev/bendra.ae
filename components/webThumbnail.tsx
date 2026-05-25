// components/webThumbnail.tsx (Simple Version)
'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Language, OpenInNew } from '@mui/icons-material';

interface WebThumbnailProps {
  url: string;
  width?: number;
  height?: number;
}

export default function WebThumbnail({ url, width = 400, height = 220 }: WebThumbnailProps) {
  const [imageError, setImageError] = useState(false);

  // Clean URL for screenshot
  const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  
  // WordPress.com screenshot service (free)
  const screenshotUrl = `https://s0.wp.com/mshots/v1/https://${cleanUrl}?w=${width}&h=${height}`;

  const getDomain = (url: string) => {
    try {
      return new URL(url.startsWith('http') ? url : `https://${url}`).hostname.replace('www.', '');
    } catch {
      return url.replace(/^https?:\/\//, '').replace('www.', '').replace(/\/$/, '');
    }
  };

  const domain = getDomain(url);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover .hover-overlay': {
          opacity: 1,
        },
      }}
      onClick={() => window.open(url.startsWith('http') ? url : `https://${url}`, '_blank')}
    >
      {/* Screenshot or Fallback */}
      {!imageError ? (
        <Box
          component="img"
          src={screenshotUrl}
          alt={`Screenshot of ${domain}`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Language sx={{ fontSize: 36, color: '#3b82f6', opacity: 0.7 }} />
          <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', color: '#555', fontWeight: 600 }}>
            {domain}
          </Typography>
        </Box>
      )}

      {/* Browser Top Bar */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '24px',
          background: '#e5e5e5',
          display: 'flex',
          alignItems: 'center',
          px: 1.2,
          gap: 0.6,
          zIndex: 2,
        }}
      >
        <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
        <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#febc2e' }} />
        <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#28c840' }} />
        <Box sx={{ flex: 1, backgroundColor: '#fff', borderRadius: '3px', height: '14px', mx: 1 }} />
      </Box>

      {/* Hover Overlay */}
      <Box
        className="hover-overlay"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#fff' }}>
          <OpenInNew sx={{ fontSize: 16 }} />
          <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', fontWeight: 500 }}>
            Visit {domain}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}