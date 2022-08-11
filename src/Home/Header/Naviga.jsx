import React from "react";
import { Breadcrumb, Button, Dropdown, Menu, Space } from "antd";
import { S_navigate, S_container } from "./S_headertop";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
const Naviga = () => {
  const packages = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Search 1
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Search 2
            </a>
          ),
        },
        {
          key: "3",
          label: "Tour Packages",
          children: [
            {
              key: "2-1",
              label: "Carousel",
            },
            {
              key: "2-2",
              label: "Custom map",
            },
            {
              key: "2-3",
              label: "360 Parorama",
            },
            {
              key: "2-4",
              label: "Default",
            },
          ],
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Destination
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Typology
            </a>
          ),
        },
      ]}
    />
  );
  const shop = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Archive
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Single Product
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Cart
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Checkout
            </a>
          ),
        },
      ]}
    />
  );
  const aboutUs = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              About Us
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              About Us 2
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              About Us 3
            </a>
          ),
        },
      ]}
    />
  );
  const pages = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Service
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Agency Tour
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Tesstimonial
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Price
            </a>
          ),
        },
        {
          key: "2",
          label: "About Us",
          children: [
            {
              key: "2-1",
              label: "About Us 1",
            },
            {
              key: "2-2",
              label: "About Us 2",
            },
            {
              key: "2-3",
              label: "About Us 3",
            },
          ],
        },
      ]}
    />
  );
  const news = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Archive
            </a>
          ),
        },
        {
          key: "2",
          label: "Single Post",
          children: [
            {
              key: "2-1",
              label: "Full Width",
            },
            {
              key: "2-2",
              label: "Right Slidebar",
            },
            {
              key: "2-2",
              label: "Left Slidebar",
            },
          ],
        },
      ]}
    />
  );

  return (
    <S_container>
      <S_navigate>
        <div className="naviLogo">
          <img
            className="logo"
            src="http://www.nicdarkthemes.com/themes/travel/wp/demo/summer-holiday/wp-content/uploads/sites/4/2018/11/logo-color.png"
          />
        </div>
        <div className="naviLink">
          <Breadcrumb separator="">
            <Space size={50}>
              <BreadcrumbItem>
               
                <span className="textNavi"> <a href="#">HOME</a></span>
              </BreadcrumbItem>
              <Breadcrumb.Item href="">
                <Dropdown  overlayStyle={{width : '189px'}} overlay={packages} placement="bottomLeft">
                  <span className="textNavi">PACKAGES</span>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Dropdown  overlayStyle={{width : '189px'}} overlay={shop} placement="bottomLeft">
                  <span className="textNavi">SHOP</span>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Dropdown  overlayStyle={{width : '189px'}}  overlay={aboutUs} placement="bottomLeft">
                  <span className="textNavi">ABOUT US</span>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Dropdown  overlayStyle={{width : '189px'}} overlay={pages} placement="bottomLeft">
                  <span className="textNavi">PAGES</span>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Dropdown  overlayStyle={{width : '189px'}} overlay={news} placement="bottomLeft">
                  <span className="textNavi">NEW</span>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Dropdown  overlayStyle={{width : '189px'}} overlay={packages} placement="bottomLeft">
                  <span className="textNavi">CONSTACT</span>
                </Dropdown>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <div className="bookNow">
                <span className="textNavi"> <a href="#">BOOK NOW</a></span>
                </div>
              </Breadcrumb.Item>
            </Space>
          </Breadcrumb>
        </div>
      </S_navigate>
    </S_container>
  );
};

export default Naviga;
