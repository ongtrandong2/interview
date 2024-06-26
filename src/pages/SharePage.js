import React, { useState } from 'react';
import ShareResults from '../components/shareResults';
import "./styles.css";
const SharePage = () => {

    return (
        <div className="background-gradient d-flex justify-content-center align-items-center" style={{height:"auto"}}>
          <div className='row-xl-12'>
            <h1 className='text-light mb-5'>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h1>
            <div className='justify-content-center'>
            <ShareResults />
            </div>
          </div>
        </div>
      );
    };

export default SharePage;
