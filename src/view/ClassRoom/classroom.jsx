import React, { Component } from 'react'
import { Menu } from 'antd'
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
const { SubMenu } = Menu
class classroom extends Component {
  render() {
    return (
      <div>
        <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<HomeOutlined />} title="首页">
            <Menu.Item key="1">系统首页</Menu.Item>
            <Menu.Item key="2">账户设置</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="基础管理">
            <Menu.Item key="5">市场管理</Menu.Item>
            <Menu.Item key="6">摊位管理</Menu.Item>
            <Menu.Item key="7">竞拍管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="租凭管理">
            <Menu.Item key="9">订单管理</Menu.Item>
            <Menu.Item key="10">竞拍订单</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<SettingOutlined />} title="用户管理">
            <Menu.Item key="11">租户列表</Menu.Item>
            <Menu.Item key="12">微信会员列表</Menu.Item>
            <Menu.Item key="13">租户等级</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<SettingOutlined />} title="权限管理">
            <Menu.Item key="14">权限管理</Menu.Item>
            <Menu.Item key="15">部门管理</Menu.Item>
            <Menu.Item key="16">管理员管理</Menu.Item>
            <Menu.Item key="17">操作日志</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default classroom
