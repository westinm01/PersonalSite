import Project from './Project.js'

const projects = [
    {
        title: "Augment", desc: 'A strategy chess-like game, where you can add "augment" your pieces with passive abilities! Abilities include stunning pieces, moving twice in one turn, and more!',
        image: "https://i.ibb.co/QvRNT5yB/Untitled-design-3.png"
    },
    {title: "Clouds N' Paws", desc: "A relaxing puzzle game featuring dozens of levels! Mentored a team of high school students over 4 months.",
        image: "https://i1.sndcdn.com/artworks-WWbZ6LEHHckCFCED-SXzk6Q-t240x240.jpg"
    },
    {title: "Sketch", desc: "30k+ copies sold! In a 2D paper-like world, you can draw and erase shapes to traverse levels and defeat enemies. Led a team of 18 members to develop over 7 months.",
        url: "https://store.steampowered.com/app/1943220/Sketch/",
        image: "https://gamespawn.github.io/img/projects/Sketch/thumbnail.png"
    },
]


export default function ProjectList(){
    return(
        <div id = "project-section">

            <h1 style = {{color:"white"}}>Published Titles</h1>
            <div id = "projects">
                {projects.map((proj, index) => <Project title={proj.title} desc = {proj.desc} url = {proj.url} image={proj.image} key = {index}></Project>)}
            </div>
        </div>
    )
}