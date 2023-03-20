import React, { useEffect, useRef, useState } from 'react';
import QrReader from 'react-qr-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyProduct } from '../../Actions/Product';

const previewStyle = {
  height: 400,
  width: 400,
  display: 'flex',
  justifyContent: 'center',
  marginTop: "5%",
}

const camStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: "-50px",
}

const textStyle = {
  fontSize: '30px',
  textAlign: 'center',
  marginTop: "-50px",
}

const VerifyProduct = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { product, success } = useSelector((state) => state.verifyProduct);
  const successRef = useRef();

  useEffect(() => {
    successRef.current = success;
    if (success === false) {
      navigate('/fake/product');
    }
    if (success) {
      navigate('/view/product');
    }

  }, [success]);


  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
      dispatch(verifyProduct(data.text));
      // if (product) {
      //   navigate('/view/product');
      // }

    }
  };
  return (
    <>
      <div style={camStyle}>
        {!result && <QrReader
          delay={100}
          onError={(err) => { console.log(err); }}
          onScan={handleScan}
          style={previewStyle}
        />}
      </div>
      <p style={textStyle}>Scan QR Code {result}</p>
    </>
  )
}

export default VerifyProduct