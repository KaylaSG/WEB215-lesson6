import React, {useEffect, useState} from 'react';
import './TinderCards.css';
import TinderCard from "react-tinder-card";
import axios from './axios';

function TinderCards() {
const [people, setPeople] = useState ([
    // {
    //     name: "Elon Musk",
    //     url:"https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg"
    // },
    // {
    //     name: "Jess Bezos",
    //     url:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Jeff_Bezos%27_iconic_laugh_%28cropped%29.jpg"
    // },
]);

useEffect(() => {
    async function fetchData() {
        const req = await axios.get('/tinder/cards');

        setPeople(req.data);
    }

    fetchData();
}, [])

console.log(people);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
};

const outOfFrame = (name) => {
    console.log(name + " left the screen!");
};

  return (
    <div className="tinderCards">
        <div className="tinderCards_cardContainer">
        {people.map((person) => (
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>

                <div style={{backgroundImage: "url(" + person.imgUrl + ")"}}
                className="card">
                    <h3>{person.name}</h3>
                </div>
                
            </TinderCard>
        ))}
        </div>

        
    </div>
  );
}

export default TinderCards