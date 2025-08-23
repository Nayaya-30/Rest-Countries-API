import { useState, useEffect, useRef, useContext } from 'react'
import {  Button } from '../components/Country/Button.jsx'
import {  Border } from '../components/Country/Border.jsx'
import {  Details } from '../components/Country/Details.jsx'

export const Countrypage = () => {
    return (
        <>
            <Button />
            <Border />
            <Details />
        </>
    )
}