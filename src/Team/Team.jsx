import React from "react";
import Hero from '../componants/Hero/Hero';
import malhar from '../assets/malhar.webp'
import nawaz from '../assets/nawaz.webp'
import omkar from '../assets/omkar.webp'
import gawale from '../assets/gawale.webp'
import yedabocha from '../assets/satyajeet.webp'
import supe from '../assets/supe.webp'
import tuka from '../assets/tuka.webp'
import zishan from '../assets/zishan.webp'
import dharma from '../assets/dharma.webp'

import TeamCard from "./TeamCard";
import "./Team1.css";
import { Bot } from "lucide-react";
function Team() {
  return (
    <>
     <div className="team-page">
      <div className="hero-background">
        <Hero />
      </div>
      <div>
      <div className="team-content">
     <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24 z-10">
     <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          Meet Our Team
        </h1>
        <h2 className="main-coordinator-heading">Technical Secretary</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="ankit khamitkar"
              position="Technical Secretary"
     
              email="2022BIN008@sggs.ac.in"jpg
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239532/your-cloudinary-folder-name/dxkmrzwnbxnuhfu9u41u.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Cheif Advisor</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="tushar gupta"
              position="Cheif Advisor"
     
              email="2022BIN008@sggs.ac.in"jpg
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244490/your-cloudinary-folder-name/fi00l9dejdpixialrf95.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Student Joint Coordinator</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Sneha Malhare"
              position="Student Joint Coordinator"
     
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244486/your-cloudinary-folder-name/ju1crsmmmedoypykowsk.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Vallabh Deshpande"
              position="Student Joint Coordinator"
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BEC512@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239589/your-cloudinary-folder-name/cczzx4dpwa0wojpjub6b.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Atharva Dharmadhikari"
              position="Student Joint Coordinator"
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2022BCS111@sggs.ac.in"
              image={dharma}
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Nawaz Khan"
              position="Student Joint Coordinator"
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2022BEC002@sggs.ac.in"
              image={nawaz}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Technical Secretary</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Sneha Malhare"
              position="Student Joint Coordinator"
     
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229669/your-cloudinary-folder-name/hw47imc72mac5hf32mfm.png"
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Chief Media Strategist</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Omkar Dalvi "
              position="Senior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image={omkar}
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Sadashiv Bodke"
              position="Senior Assistant 
Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229669/your-cloudinary-folder-name/hw47imc72mac5hf32mfm.png"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Guest Experience Manager</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Sneha Malhare"
              position="Senior Executive"
     
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244486/your-cloudinary-folder-name/ju1crsmmmedoypykowsk.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Harshita Kabra "
              position="Senior Assistant 
Executive"
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2022BEC002@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244436/your-cloudinary-folder-name/pwqczlm0waswhah6nhiw.png"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Disha Bachuwar"
              position="Senior Assistant 
Executive"
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2022BEC002@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239584/your-cloudinary-folder-name/w0eaajvqcraqujvwj8z6.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Permissions Manager</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Shrirang Rekhate"
              position="Senior Executive"
     
              email="2022BIN008@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244410/your-cloudinary-folder-name/ucgmox5rqvvskj8ql3qp.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Event Manager</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Vallabh Deshpande "
              position="Senior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239589/your-cloudinary-folder-name/cczzx4dpwa0wojpjub6b.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Siddhi Pokhrikar "
              position="Senior Assistant 
Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244351/your-cloudinary-folder-name/oz2lyfysazl1qu7zqtgn.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Public Relations Officers</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Malhar Maradwar"
              position="Senior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image={malhar}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading"> Disciplinary Committee</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Arohi Pande "
              position="Senior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239580/your-cloudinary-folder-name/bewbzyjodopxhikizyrq.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Shaikh Arbaz"
              position="Senior Assistant Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239548/your-cloudinary-folder-name/hkifn5hmuua6lixjmlgv.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading"> Food & Site committee</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Nawaz Khan "
              position="Senior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image={nawaz}
            />
          </div>
          
          <div className="team-card">
            <TeamCard
              name="Zeeshan Malik "
              position="Senior Assistant 
Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image={zishan}
            />
          </div>

          <div className="team-card">
            <TeamCard
              name="Tukaram Renge+ "
              position="Senior Assistant 
Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image={tuka}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading"> Aesthetics Manager</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Pratik Sarode"
              position="Senior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244464/your-cloudinary-folder-name/pmoutk1kufnpkx5l2d8n.jpg"
            />
          </div>
          
          <div className="team-card">
            <TeamCard
              name="Abhijeet Gawale"
              position="Senior Assistant 
Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image={gawale}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading"> Sponsorship</h2>
        <div className="team-container">
          
          <div className="team-card">
            <TeamCard
              name="Satyajeet Damekar "
              position="Senior Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image={yedabocha}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading">Senior Website Developer </h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Dhiren Mhatre"
              position="Senior Executive"
              instagram=""
         
              email="2022BCS109@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738239578/your-cloudinary-folder-name/fozmetowh3ikn9si2jql.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="ATHARVA SUPE"
              position="Senior ASSISTANT Executive"
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2022BEL030@sggs.ac.in"
              image={supe}
              // image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738244488/your-cloudinary-folder-name/qnfa1ronpp7zcloprlvb.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading"> Junior Website Developer</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Aditya Raut"
              position="Junior Executive "
     
              email="2023BCE055@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738245644/your-cloudinary-folder-name/n4qougjpplvqbwqhnjpz.jpg"           />
          </div>
          
          <div className="team-card">
            <TeamCard
              name="Nandkishor jadhav"
              position="Junior Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738243482/your-cloudinary-folder-name/rpazhzpuejwgifmvvsky.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Abhijit raut"
              position="Junior Executive "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229669/your-cloudinary-folder-name/hw47imc72mac5hf32mfm.png
"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-h-[570px] pt-8 px-4 pb-24">
        <h2 className="main-coordinator-heading"> Website Support Assistant</h2>
        <div className="team-container">
          <div className="team-card">
            <TeamCard
              name="Saloni tarone"
              position="Junior Assistant "
     
              email="2023BCE055@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738243673/your-cloudinary-folder-name/mrthtun2ai7umcgp7ni8.jpg"
            />
          </div>
          
          <div className="team-card">
            <TeamCard
              name="Ishita rander"
              position="Junior Assistant "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738243461/your-cloudinary-folder-name/maxkyqkkcexie21afaju.jpg"
            />
          </div>
          <div className="team-card">
            <TeamCard
              name="Narayni pande"
             position="Junior Assistant "
              instagram="asfdasdf"
              linkedin="adsfasfd"
              email="2023BPR037@sggs.ac.in"
              image="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229669/your-cloudinary-folder-name/hw47imc72mac5hf32mfm.png"
            />
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Team;
