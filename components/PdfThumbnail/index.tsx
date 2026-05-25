'use client';

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, CircularProgress, Typography } from '@mui/material';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfThumbnailProps {
  file: string;
  width?: number;
}

export default function PdfThumbnail({ file, width = 280 }: PdfThumbnailProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: '12px 12px 0 0',
        position: 'relative',
      }}
    >
      {loading && !error && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            zIndex: 2,
          }}
        >
          <CircularProgress size={30} sx={{ color: '#3b82f6' }} />
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.75rem',
            }}
          >
            Loading preview...
          </Typography>
        </Box>
      )}

      {error && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: '2.5rem' }}>📄</Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.75rem',
            }}
          >
            PDF Document
          </Typography>
        </Box>
      )}

      {!error && (
        <Document
          file={file}
          onLoadSuccess={() => setLoading(false)}
          onLoadError={() => {
            setLoading(false);
            setError(true);
          }}
          loading=""
        >
          <Page
            pageNumber={1}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      )}
    </Box>
  );
}