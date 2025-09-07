import React from 'react';
import { Alert} from 'antd';

const AlertComponent: React.FC = () => (
  <>
    <Alert message="Thêm tài khoản thành công" type="success" showIcon closeIcon/>
    <br />
    <Alert message="Thông tin tài khoản" type="info" showIcon closable />
    <br />
    <Alert message="Thêm không được để trống" type="warning" showIcon closable />
    <br />
    <Alert message="Thêm mới tài khoản thất bại" type="error" showIcon closable />
  </>
);

export default AlertComponent;