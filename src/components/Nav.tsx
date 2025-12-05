import '../styles/nav.css'
import { FaUserTie } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GiMicroscope } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function NavComponent() {
  return (
    <div className='nav_com'>
      <div className="nav_com_i">
        <div className="dot nav_item">
          <FaUserTie size={32} color='#00123a' />
          <Link to="/">Profile</Link>
        </div>
        <div className="dot nav_item">
          <FaUniversity size={32} color='#00123a' />
          <Link to="/Education">Education</Link>
        </div>
        <a className="dot nav_item" href="">
          <MdEngineering size={32} color='#00123a' />
          Experience
        </a>
        <a className="dot nav_item" href="">
          <HiMiniAcademicCap size={32} color='#00123a' />
          Academic roles
        </a>
        <a className="dot nav_item" href="">
          <GiMicroscope size={32} color='#00123a' />
          Research projects
        </a>
        <a className="dot nav_item" href="">
          <GiBrain size={32} color='#00123a' />
          Skills
        </a>
        <a className="dot nav_item" href="">
          <IoIosMail size={32} color='#00123a' />
          Contact
        </a>
      </div>
    </div>
  )
}
