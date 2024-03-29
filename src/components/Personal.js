import React from 'react';
import "../components/Personal.css";


function Personal(){
    return (

        <>
        <section className='img_principal'>
            <img src={process.env.PUBLIC_URL + "/images/ourTeam.jpg"} alt='the team'/>
            <h2>Meet the Team & Advisory Board</h2>
            <div className='teams'>
                <article className="info-snippet">
                    <div className=' image_team'>
                        <input type="image" className="info-snippet_img" img src={process.env.PUBLIC_URL + "/images/Charles.jpg"} alt='the team picture'/>
                        <h4>Charles Bizindavyi</h4>
                            <h5>Founder & Managing Director</h5>
                                <p>Charles Bizindavyi a Burundian citizen, is a result-oriented young man with duo profiles in computer science and development studies. &nbsp;<a href="https://www.linkedin.com/in/charles-bizindavyi-a30082161/">Learn More</a></p>
                        <hr/>
                    </div>
                </article>
                <article className="info-snippet">
                    <div className=' image_team'>
                        <input type="image" className="info-snippet_img" img src={process.env.PUBLIC_URL + "/images/jeanphilippe.jpeg"} alt='the team picture'/>
                        <h4>Jean-Philippe Saint-Jean</h4>
                            <h5>Co-Founder & Chair of the board</h5>
                                <p>Jean-Philippe Saint-Jean a french citizen, is an impact dealer whith more than a decade working on impact projects  &nbsp;<a href="https://www.linkedin.com/in/charles-bizindavyi-a30082161/">Learn More</a></p>
                            
                        <hr/>
                    </div>
                </article>
                   <article className="info-snippet">
                    <div className=' image_team'>
                        <input type="image" className="info-snippet_img" img src={process.env.PUBLIC_URL + "/images/blankphoto.jpg"} alt='the team picture'/>
                            <h4>Ralph Böhlke</h4>
                            <h5>Advisory Board Member</h5>
                                <p>Ralph Böhlke a German citizen with 17+ years of experience in Project Management, Cooperation, and Business &nbsp;<a href="https://www.linkedin.com/in/jean-philippe-saint-jean-b7331885/">Learn More</a></p>
                            
                        <hr/>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
}
export default Personal;