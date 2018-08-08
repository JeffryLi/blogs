import React, { Component } from 'react';
import { Input, Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: '首页',
    path: '/#/',
  },
  {
    name: '文章',
    path: '/#/article',
  },
  {
    name: '视频',
    path: '/#/video',
  },
  {
    name: '游戏',
    children: [
      {
        name: '圈圈叉叉',
        path: '/ice/video',
      },
      {
        name: '区块',
        path: '/ice/video',
      },
      {
        name: '布局',
        path: '/ice/layout',
      },
      {
        name: '模板',
        path: '/ice/scaffold',
      },
    ],
  },
  {
    name: '工具',
    children: [
      {
        name: 'ICEWORKS',
        path: '/ice/iceworks',
      },
      {
        name: 'Playground',
        path: '/ice/playground',
      },
    ],
  },
  {
    name: '登陆',
    path: '/#/login',
  },
];

export default class Header extends Component {
  renderBalloonContent = (menu, idx) => {
    return (
      <Menu.Item key={idx}>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu, idx) => {
            return (
              <a href={subMenu.path} className="custom-sub-menu" key={idx}>
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu, idx) => {
      if (menu.children) {
        return this.renderBalloonContent(menu, idx);
      }
      return (
        <Menu.Item key={menu.path}>
          <a href={menu.path}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo isDark={true} />
          <div className="header-navbar">
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
