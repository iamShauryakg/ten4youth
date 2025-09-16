import { Link } from "react-router-dom";
import babyicon from "../../assets/babyicon.avif";
import logo from "../../assets/logo.png"
import samplevid from "../../assets/samplevid.mp4"

function Angles_Academy() {
    return (
        <section className="lla-section ">
            <div>
                <div className="flex flex-col justify-center items-center py-[100px] px-[20px]">
                    <h2 className="text-[28px] my-[20px] uppercase font-semibold color-[#787272] tracking-wider flex items-center gap-[10px]"> 
                        Little angels Academy
                        <img src={babyicon} alt="babyicon" />
                    </h2>

                    <div className="flex m-auto justify-center items-center gap-[40px] mb-[50px]">
                        <div className="flex flex-col text-[15px] text-[#333] text-1.8 max-w-[600px]">
                            <p>
                                Little Angels Academies (LAA) are daycares located within or near training centers. <strong> They welcome the children of young women participating in TEN4YOUTH training programs,</strong> allowing them to follow the training with peace of mind.
                            </p>
                            <br />
                            <p>
                                LAAs contribute to children's education and development while rasing family awareness on topics like hygiene, nutrition, health, safety, and child development.
                            </p>
                            <br />
                            <p>
                                To support the Little Angels Academies , you can send donations, specifying that your donation is for the Little Angels Academy program.
                            </p>
                        </div>

                        <div className="max-w-[600px]">
                            <video width="100%" height="auto" controls poster={logo} className='object-cover w-[500px] h-[300px] rounded-[10px]'>
                                <source src={samplevid} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <Link to="/">
                        <div className="bg-orange-400 max-w-[450px] uppercase myt-[40px] mx-auto rounded-[25px] text-[24px] text-white font-bold py-[2px] px-[20px]"> 
                                Support the lla
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}


export default Angles_Academy;