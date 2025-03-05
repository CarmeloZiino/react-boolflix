// DEFAULT LAYOUT

import { Outlet } from "react-router-dom"; //Import Functions from React

import Header from '../components/Header'

export default function DefaultLayout () {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}