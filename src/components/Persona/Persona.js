import React from 'react';
import { useParams } from 'react-router-dom';

export default function Persona() {
    const { id } = useParams();
    return (
        <>
        <h1>Hola {id}</h1>
        </>
    )
}