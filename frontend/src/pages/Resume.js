import * as React from 'react';
import FileViewer from 'react-file-viewer';
import Button from '@mui/material/Button';
import file from '../files/Egan, Alex Resume.png';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Typography } from '@mui/material';

export function Resume() {
  
  const download = () => {
    const link = document.createElement("a");
    link.download = `Egan, Alex Resume.png`;
    link.href = file;
    link.click();
  };

  return (
    <div className="resume-page">
      <h3>Updated Resume (June 12, 2023)</h3>
      <div className='file-container'>
        <div className="file-viewer">
          <FileViewer 
            fileType="png" 
            filePath={file}></FileViewer>
        </div>
        <div className="download-button-container">
          <Button onClick={download} 
              variant="contained" 
              color="primary">
            <Typography>
              <FileDownloadIcon></FileDownloadIcon>
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}