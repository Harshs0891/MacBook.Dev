import FaceTime from "../components/apps/FaceTime";
// import Terminal from "../components/apps/Terminal";
import Safari from "../components/apps/Safari";
import Bear from "../components/apps/Bear";
import VSCode from "../components/apps/VSCode";
import Calculator from "../components/apps/Calculator";
import Github from "./Github";
const apps = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "sorcerer",
    title: "Notes",
    desktop: true,
    show: false,
    width: 860,
    height: 500,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:akhileshjyotishi1729@gmail.com"
  },
  {
    id: "github",
    title: "Github",
    desktop: true,
    show: false,
    img: "img/icons/game.png",
    content: <Github />
    // link: "https://github.com/Harshs0891/MacBook.Dev"
  },
  {
    id: "calculator",
    title: "Instagram",
    desktop: true,
    img: "img/icons/launchpad/ig.png",
    height: 530,
    show: false,
    content: <Calculator />
  }
];

export default apps;
// https://web.whatsapp.com/
