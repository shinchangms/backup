import React from "react";
import Link from "next/link";
import Button from "./button/Button";
import Image from "next/image";
import logoutIcon from "../svg/logout_white_24dp.svg"
import Icon from "./icon/Icon";
import { IconName } from 'components/icon/IconName';
function Navbar() {
  return (
<div className=" w-screen">
<div className=" relative flex flex-col min-h-screen w-1/5 pl-10 bg-slate-900 text-white pt-10">
      <div className=" ">
        <Link href="/Welcome">
          <h1 className="inline-block font-bold  uppercase text-2xl text-white">
          NOOL KANDU
        </h1>
        </Link>
        
        <h4>user name</h4>
      </div>
      <div className="pt-10">
        <ul>
          <li>
            
            <ul className="pb-5 ">
              <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="0 50 500 100" 
                  style={{ fill: "white", height: "20px", width: "23px" }} iconName={IconName.USERLIST} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="/UserList"> User List</Link>
                </li>
              </span>

              <span className="flex mb-4 group/CreateUser">
                 <span className="pr-3 group-hover/CreateUser:scale-125 transition ease-in-out group-hover/CreateUser:cursor-pointer">
                  <Icon className=" "
                  // viewBox="0 -20 50 100" 
                  style={{ fill: "white", height: "20px", width: "23px" }} iconName={IconName.ADDUSER} /></span>
                <li className=" hover:text-white group-hover/CreateUser:scale-110 transition ease-in-out group-hover/CreateUser:cursor-pointer">
                  <Link href="/CreateUser">Create User</Link>
                </li>
              </span>
            </ul>
          </li>

          <li>
            
            <ul className="pb-5 group/product ">
                <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="10 10 100 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.PRODUCTLIST} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="/ProductList">Product List</Link>
                </li>
              </span>

              <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="10 10 100 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.PRODUCT} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="/CreateProduct">Create Product</Link>
                </li>
              </span>
            </ul>

            <ul>
              <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="10 10 100 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.PRODUCT} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="/Order">Order</Link>
                </li>
              </span>
            </ul>
          </li>
        </ul>

        <div className=" absolute bottom-20">
          <ul>
            <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="0 50 50 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.HOME} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="/Welcome"> Home</Link>
                </li>
              </span>

            <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="0 50 50 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.SETTING} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href=""> Settings</Link>
                </li>
              </span>

            <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="0 50 50 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.CONTACT} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="">Contact Us</Link>
                </li>
              </span>

            <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon className=" "
                  // viewBox="0 50 50 100" 
                  style={{ fill: "white", height: "22px", width: "23px" }} iconName={IconName.INFO} /></span>
                <li className=" hover:text-white group-hover/user:scale-110 transition ease-in-out group-hover/user:cursor-pointer">
                  <Link href="">About Us</Link>
                </li>
              </span>
          </ul>
        </div>
        <div className=" absolute flex items-center  hover:text-white  bottom-5">
          <span className="flex mb-4 group/user">
                 <span className="pr-3 group-hover/user:scale-125 transition ease-in-out group-hover/user:cursor-pointer">
                  <Icon 
                  // viewBox="0 50 50 100" 
                  style={{ fill: "white", height: "20px", width: "23px" }} iconName={IconName.LOGOUT} /></span>
                <li className=" group-hover/user:scale-110 transition ease-in-out ">
                  <Link href="/">Logout</Link>
                </li>
              </span>
        </div>
      </div>
    </div>
    </div>


  );
}

export default Navbar;