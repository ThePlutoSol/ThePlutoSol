import React, { useState } from 'react';
import copyClipboard from '../assets/file-copy.svg';
import '../css/CopyToClipboardButton.css';

const CopyToClipboardButton = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className='copy-btn'>
      {!copySuccess && <button onClick={copyToClipboard}><img src={copyClipboard} alt="" /></button>}
      {copySuccess && <div className='copied'>✔️</div>}
    </div>
  );
};

export default CopyToClipboardButton;
