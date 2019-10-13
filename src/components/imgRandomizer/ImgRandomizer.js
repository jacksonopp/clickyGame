import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';

import Picture from "../Picture";


export default function ImgRandomizer() {
    const [imgArr, setImgArr] = useState([]);
    const [lastClicked, setLastClicked] = useState(0);
    const [score, setScore] = useState(0);

    const images = [
        {
            img: "https://i.imgur.com/Yl8Ut7c.jpg",
            num: 1
        },
        {
            img: "https://i.imgur.com/Pi2NjJ1.jpg",
            num: 2
        },
        {
            img: "https://i.imgur.com/1TeRefq.jpg",
            num: 3
        },
        {
            img: "https://i.imgur.com/NqXP2vB.jpg",
            num: 4
        },
        {
            img: "https://i.imgur.com/wrkjiLW.jpg",
            num: 5
        },
        {
            img: "https://i.imgur.com/rojL2Sq.jpg",
            num: 6
        },
        {
            img: "https://i.imgur.com/ocjL4eR.jpg",
            num: 7
        },
        {
            img: "https://i.imgur.com/z8eLOjd.jpg",
            num: 8
        },
        {
            img: "https://i.imgur.com/LLPU7I4.jpg",
            num: 9
        },
    ]
    function shuffle(array) { // this function taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    useEffect(() => { setImgArr(shuffle(images)) }, [])

    return (
        <>
            <Row>
                <Col lg={12}>
                    Score: {score}
                </Col>
            </Row>
            <Row>
                {imgArr.map(image => (
                    <Col xs={4}>
                        <div onClick={() => {
                            setImgArr(shuffle(images));
                            setLastClicked(image.num);
                            if (lastClicked !== image.num) {
                                setScore(score + 1);
                            } else {
                                setScore(0);
                            }
                        }}
                            value={image.num}>
                            <Picture src={image.img} />
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}