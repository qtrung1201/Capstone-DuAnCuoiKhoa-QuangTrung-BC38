import React from 'react'
import { FaBox, FaCog, FaCreditCard, FaEquals, FaLocationArrow, FaPaste, FaTruck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { history } from '../../../App'

const MenuJura = () => {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    <img src={require('../../../assets/imgJira/download.jfif')} alt='logo' />
                </div>
                <div className="account-info">
                    <p>CyberLearn.vn</p>
                    <p>Report Bug</p>
                </div>
            </div>
            <div className="control">
                <div className='flex items-center'>
                    <FaCreditCard />
                    <NavLink className='ml-2 text-black' activeClassName='active font-weight-bold' to='/Jura'>Cyber Board</NavLink>
                </div>
                <div className='flex items-center'>
                    <FaCog />
                    <NavLink className='ml-2 text-black' activeClassName='active font-weight-bold' to='/createproject'>Create Project</NavLink>
                </div>
                <div className='flex items-center'>
                    <FaCog />
                    <NavLink className='ml-2 text-black' activeClassName='active font-weight-bold' to='/projectmanagement'>Project Management</NavLink>
                </div>
            </div>
            <div className="feature">
                <div className='flex items-center'>
                    <FaTruck />
                    <span className='ml-2'>Release</span>
                </div>
                <div className='flex items-center'>
                    <FaEquals />
                    <span className='ml-2'>Issues And Filter</span>
                </div>
                <div className='flex items-center'>
                    <FaPaste />
                    <span className='ml-2'>Pages</span>
                </div>
                <div className='flex items-center'>
                    <FaLocationArrow />
                    <span className='ml-2'>Report</span>
                </div>
                <div className='flex items-center'>
                    <FaBox />
                    <span className='ml-2'>Component</span>
                </div>
            </div>
        </div>
    )
}

export default MenuJura