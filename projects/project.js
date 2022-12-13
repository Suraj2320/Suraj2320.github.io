// import coschedule from "../images/coschedule.png";
const Projects = [
  {
    name: "Urban Company",
    about:
      "Urban Company is a service provider which helps customers with professional services such as Salon for men &women,Air Conditioners,Refrigerators, Electrical Appliances and Bathroom andrepairing.",
    img: "./Urban-Company.png",
    gitrepo: "https://github.com/Suraj2320/royal-receipt-2269/tree/main/my-app",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML |CSS | JavaScript  ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img style="height:43px" style="margin-top:5px"" src="https://developer.guidewire.com/wp-content/uploads/logo-react.png"/>`,
    ],
    project_link: "https://the-awesome-surajpawar913-gmail-com-site-7144e.netlify.app/",
    project_type: "Individual Project",
  },
  {
    name: "Netmeds-Clone",
    about:
      "Netmeds is a trusted Indian online pharmacy Which provides the online purchase and delivery of medications.An end to end clone of netmeds.com where you can order pharmacy products and get delivered it at your doorstep",
    img: "./images/Netmeds.png",
    gitrepo: "https://github.com/arulxavierax/Netmeds-Clone",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML | CSS | JavaScript | MongooDB ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      // `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
    ],
    project_link: "https://inspiring-blini-089dcd.netlify.app/",
    project_type: "Team Project",
  },
  {
    name: "Banggood-Clone",
    about:
      "This is an International online selling service from China with shipping. offers online shopping services areas in the world. Banggood specializes in providing Business-to-consumer retail services.",
    img: "./images/Banggood.png",
    gitrepo: "https://github.com/VijaySingh8650/Banggood-Website",
//     blog: "https://medium.com/@mohanpalleti/our-group-project-connecting-frontend-and-backend-b159a686b3d0",
    tech_stack: "HTML | CSS | JAVASCRIPT | ReactJS | Redux",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      // `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>`,
//       `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>`,
    ],
    project_link: "https://prismatic-bubblegum-5ec055.netlify.app/",
    project_type: "Team Project",
  },
  
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
