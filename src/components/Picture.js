import React from 'react';
import { Card, Image } from 'react-bootstrap';

export default function Picture({ src }) {
    return (
        <>
            <Card width="200" height="200" style={{ marginTop: "1rem" }}>
                <Card.Img variant="top" src={src} />
            </Card>
        </>
    )
}