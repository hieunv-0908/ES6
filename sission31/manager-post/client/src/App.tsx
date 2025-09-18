import React, { useState } from 'react'
import Header from '../components/Header'
import Table from "../components/Table"
import ReactMarkdown from 'react-markdown'
import { Outlet } from 'react-router-dom'
// import TestModal from "../components/TestModal"
function App() {
  const [opened, setOpened] = useState(false)
  const [conten, setContent] = useState("")
  const [mainContent, setMainContent] = useState("");
  const handleOpened = (status: boolean) => {
    setOpened(status)
  }
  return (

    <div style={{ width: '800px' }}>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .modal-box {
            background: #fff;
            width: 500px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            padding: 20px;
            animation: fadeIn 0.3s ease;
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
          }

          .modal-close {
            font-size: 20px;
            cursor: pointer;
          }

          .modal-body {
            margin-top: 15px;
          }

          .modal-input,
          .modal-textarea {
            width: 95%;
            margin-top: 5px;
            margin-bottom: 15px;
            padding: 8px;
            border-radius: 6px;
            border: 1px solid #ccc;
          }

          .modal-textarea {
            min-height: 100px;
            resize: vertical;
          }

          .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }

          .btn-reset {
            background: #eee;
            border: none;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
          }

          .btn-submit {
            background: #4cafef;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
          }

          .btn-submit:hover {
            background: #42a5f5;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Header onAddClick={() => handleOpened(true)} />
      <Outlet></Outlet>
      <div className="modal-overlay" style={{ display: `${opened ? 'flex' : 'none'}` }}>
        <div className="modal-box">
          <div className="modal-header">
            <h2>Thêm mới bài viết</h2>
            <span className="modal-close" onClick={() => { handleOpened(false) }}>☓</span>
          </div>

          <div className="modal-body">
            <label>
              <h6>Tên bài viết</h6>
              <input type="text" className="modal-input" />
            </label>

            <label>
              <h6>Hình ảnh</h6>
              <input type="file" className="modal-input" />
            </label>

            <label>
              <h6>Nội dung</h6>
              <div style={{
                display: 'flex',
                gap: '8px'
              }}>
                <textarea className="modal-textarea" value={conten} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
                  setContent(e.target.value);
                  setMainContent(e.target.value)
                }}></textarea>
                <div
                  style={{
                    width: "50%",
                    minHeight: "300px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    backgroundColor: "#fafafa",
                    overflow: "auto",
                  }}
                ><ReactMarkdown>{mainContent}</ReactMarkdown></div>
              </div>
            </label>
          </div>

          <div className="modal-footer">
            <button className="btn-reset">Làm mới</button>
            <button className="btn-submit">Xuất bản</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App