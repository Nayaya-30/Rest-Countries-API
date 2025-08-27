import { useState, useEffect, useRef, useContext } from 'react'
import {  Button } from '../components/country/Button.jsx'
import {  Border } from '../components/country/Border.jsx'
import {  Details } from '../components/country/Details.jsx'

export const Countrypage = () => {
    return (
        <>
            <Button />
            <Border />
            <Details />
        </>
    )
}