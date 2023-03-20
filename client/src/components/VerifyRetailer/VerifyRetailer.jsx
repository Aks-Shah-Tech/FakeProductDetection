import React, { useEffect, useRef, useState } from 'react';
import QrReader from 'react-qr-scanner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyRetailer } from '../../Actions/Retailer';

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

const VerifyRetailer = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { success, retailer } = useSelector((state) => state.verifyRetailer);
  const { product } = useSelector((state) => state.verifyProduct);
  const retailerSuccessRef = useRef();

  useEffect(() => {
    retailerSuccessRef.current = success;
    if (success) {
      if((retailer._id === product.retailerId)){
        navigate('/view/retailer')
      }else{
        navigate('/fake/retailer');
      }
    }
    if (success === false) {
      navigate('/fake/retailer');
    }
  }, [success])

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
      dispatch(verifyRetailer(data.text));
      // if (retailerSuccessRef.current) {
      //   // navigate('/view/retailer');
      //   alert("Retailer verify")
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

export default VerifyRetailer