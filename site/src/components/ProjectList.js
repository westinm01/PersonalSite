import Project from './Project.js'

const projects = [
    {
        title: "Augment", desc: 'A strategy chess-like game, where you can add "augment" your pieces with passive abilities! Abilities include stunning pieces, moving twice in one turn, and more!',
        url: "https://play.google.com/store/apps/details?id=com.OpinMindGames.Augment&pcampaignid=web_share",
        image: "https://play-lh.googleusercontent.com/_BpoH72WH3Tr2u6stIaQFkIbH-VqAdEqYliPeTiOsbW4CD6IIL-neDWkvEwN49dw3Mk=w240-h480-rw"
    },
    {title: "Clouds N' Paws", desc: "A relaxing puzzle game featuring dozens of levels! Mentored a team of high school students over 4 months.",
        url: "https://play.google.com/store/apps/details?id=com.OpenMindGames.CloudsNPaws&pcampaignid=web_share",
        image: "https://play-lh.googleusercontent.com/yAbupFzFFtQSK21OS2_S9zG7B0li8TTlr4_6u4QBvlGcrYK8SRvz6RtfF3278f1DuaJT=w240-h480-rw"
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