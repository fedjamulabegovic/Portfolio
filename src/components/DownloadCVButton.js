import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons'; // Adjust based on your chosen icon library

const DownloadCVButton = () => {
  const handleDownloadCV = () => {
    window.open('../images/Fedja_Mulabegovic-1.pdf', '_blank');
  };

  return (
    <button onClick={handleDownloadCV} className="vvd">
      Download my CV <ArrowRightCircle size={25} />
    </button>
  );
};

export default DownloadCVButton;
