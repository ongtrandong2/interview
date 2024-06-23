import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css";
const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div className='row justify-content-center '>
      <div className='col-xl-12 d-flex justify-content-center'>
      <div className="container-box col-xl-4" >
            <h2 className='mb-4 text-light'>HƯỚNG DẪN TRẢ LỜI</h2>
            <p className='text-light'>Hãy dựa vào hướng dẫn sau đây để trả lời các câu hỏi:</p>
            <ul className='text-left text-light'>
                <li>Chọn "Có": nếu câu đó phản ánh hiện trạng đang có VÀ được thực hiện một cách nhất quán (ít nhất 80% thời gian)</li>
                <li>Chọn "Không có": nếu hoàn toàn chưa từng thực hiện</li>
                <li>Chọn "Không rõ về vấn đề này": nếu không chắc chắn đã thực hiện hay chưa</li>
            </ul>
        </div>
      </div>
      <div className='col-xl-12 d-flex justify-content-center'>
      <button className='col-xl-2' class="btn btn-custom" onClick={() => navigate('/questionnaire')}>Bắt đầu</button>
      </div>
    </div>
  );
};

export default Instructions;
