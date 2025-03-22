import React from 'react'

import { Layout, Menu, theme } from 'antd'

const items = [
    {
        key: '1',
        icon: 'user',
        title: 'nav 1',
        },
        {
        key: '2',
        icon: 'video-camera',
        title: 'nav 2',
        },
        {
        key: '3',
        icon: 'upload',
        title: 'nav 3',
        },
        {
        key: '4',
        icon: 'user',
        title: 'nav 4',
    }
]



const CustomLayout = () => {
  const { Header, Content, Footer, Sider } = Layout
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default CustomLayout