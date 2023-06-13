import * as React from 'react';
import file from '../files/Egan, Alex Resume 20230612.png';
import Button from ''

export function Resume() {
  return (
    <div className="resume-page">
      <h3>Updated Resume (June 12, 2023)</h3>
      <div className='resume'>
        <FileViewer 
          fileType="png" 
          filePath={file}></FileViewer>
      </div>
      <></>
    </div>
  );
}