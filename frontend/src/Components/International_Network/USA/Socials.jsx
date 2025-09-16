import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';


const Socials = () => {
    return (
        <div className="flex justify-center gap-6 mb-12">
            
            <a
                href="https://www.facebook.com/lp4yusa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-orange-400 hover:bg-orange-300 rounded-full flex items-center justify-center shadow-lg transition duration-300"
                aria-label="Facebook"
            >
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-4xl" />
            </a>

            <a
                href="https://www.instagram.com/lp4y_usa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-orange-400 hover:bg-orange-300 rounded-full flex items-center justify-center shadow-lg transition duration-300"
                aria-label="Instagram"
            >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl" />
            </a>

            <a
                href="https://www.linkedin.com/company/lp4y/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-orange-400 hover:bg-orange-300 rounded-full flex items-center justify-center shadow-lg transition duration-300"
                aria-label="LinkedIn"
            >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white text-4xl" />
            </a>

            <a
                href="https://www.lp4y.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-orange-400 hover:bg-orange-300 rounded-full flex items-center justify-center shadow-lg transition duration-300"
                aria-label="YouTube"
            >
                <FontAwesomeIcon icon={faYoutube} className="text-white text-4xl" />
            </a>

        </div>

    )
}

export default Socials
