import { useState, useEffect, useRef, useContext } from 'react'
import { Card } from '../components/Home/Card.jsx'
import { Filter } from '../components/Home/Filter.jsx'
import { Search } from '../components/Home/Search.jsx'

export const Homepage = () => {
    return (
        <>
            <Search />
            <Filter />
            <Card />
        </>
    )
}