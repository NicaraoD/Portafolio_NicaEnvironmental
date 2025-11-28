import '../styles/nav.css'
import { FaUserTie } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GiMicroscope } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

export default function NavComponent() {
  return (
    <div className='nav_com'>
      <a className="nav_item" href="Profile">
        <FaUserTie size={32} color='#00123a' />
        Profile
      </a >

      <a className="dot nav_item" href="#">
        <FaUniversity size={32} color='#00123a' />
        Education
      </a>
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
  )
}
