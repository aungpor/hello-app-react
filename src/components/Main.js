import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link, NavLink } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function Main({ children }) {
    const items = [
        {
            label: (
                <a href="/">
                    Page 1
                </a>
            ),
            key: 'FirstPage',
        },
        {
            label: (
                <a href="/SecondPage">
                    Page 2
                </a>
            ),
            key: 'SecondPage',
        },
        {
            label: (
                <a href="/ThirdPage">
                    Page 3
                </a>
            ),
            key: 'ThirdPage',
        },
        {
            label: (
                <a href="/PageFour">
                    Page 4
                </a>
            ),
            key: 'PageFour',
        },
    ]

    return (
        <>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    // background: 'rgb(120, 127, 192)'
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                // items={items}
                >
                    <Menu className="menu-item-header" key="0">
                        Link test
                    </Menu>
                </Menu>
            </Header>

            <Content className="content-ant">{children}</Content>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </>

    )
}

export default Main