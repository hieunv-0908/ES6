import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const App: React.FC = () => (
  <Flex align="center" gap="middle" vertical>
    <Spin indicator={<LoadingOutlined spin style={{ color: 'blue' }} />} />
    <Spin indicator={<LoadingOutlined spin style={{ color: 'gray' }}/>} size="large" />
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 ,color: 'green'}} spin/>} />
  </Flex>
);

export default App;