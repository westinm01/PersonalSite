import './Hero.css';

export default function Hero(){
    return (
        <div id = "hero">
            {/*<img id = "my-pic" src = "https://media.licdn.com/dms/image/D5603AQHgfF9t-5pvCg/profile-displayphoto-shrink_800_800/0/1686001697096?e=2147483647&v=beta&t=osq-DzTH5wDhOb6QFXcMjG2Pbs6kHXmKCqQqmpCwHu0" alt = "me"/>*/}
            <img id = "my-pic" src = {`${process.env.PUBLIC_URL}/newpfp.jpg`} alt = "me"/>
            <div id = "hero-text">
                <h1 className = "name">Westin Montano</h1>
                <h2 className = "title">Game Developer and Lecturer at UCR</h2>
                <div className = "Endorsement">
                <figcaption> My 'Official' Microsoft Education Endorsement</figcaption>
                
                <img src = {`${process.env.PUBLIC_URL}/m.png`} alt = "Microsoft-Endorsement"></img>
                </div>
            </div>
        </div>
    );
}