import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify";
import { verifyProduct } from '../../Actions/Product';

const previewStyle={
    height: 700,
    width: 700,
    display: 'flex',
    justifyContent: 'center',
  }
  
  const camStyle={
    display: 'flex',
    justifyContent: 'center',
    marginTop: "-50px",
  }
  
  const textStyle={
    fontSize: '30px',
    textAlign: 'center',
    marginTop: "-50px",
  }

const VerifyProduct = () => {
    const [result, setResult] = useState(null);

    const dispatch = useDispatch();

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
      // send scanned data to backend server for verification

      dispatch(verifyProduct(data.text, toast));


      // fetch('http://localhost:5000/api/v1/verifyProduct', {
      //   method: 'POST',
      //   body: JSON.stringify({ qrCode: data.text }),
      //   headers: { 'Content-Type': 'application/json' },
      // })
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data);
      //   })
      //   .catch(err => console.log(err));
    }
  };
  return (
    <>
    <div style={camStyle}>
      <QrReader
        delay={100}
        onError={console.log}
        onScan={handleScan}
        style={previewStyle}
      />
    </div>
      <p style={textStyle}>Scanned QR Code: {result}</p>
    </>
  )
}

export default VerifyProduct