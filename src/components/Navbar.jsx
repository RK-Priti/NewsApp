import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuopen, setmenuopen] = useState(false)
    return (
        <>
            <div className='nav' >
                <label className='section1'><Link to="/">News App</Link></label>
                <ul className={menuopen ? "open" : ""}>

                    <li>
                        <Link to="/entertainment">entertainment</Link>
                    </li>
                    <li>
                        <Link to="/health">health</Link>
                    </li>
                    <li>
                        <Link to="/science">science</Link>
                    </li>
                    <li>
                        <Link to="/sports">sports</Link>
                    </li>
                    <li>
                        <Link to="/technology">technology</Link>
                    </li>
                </ul>
                
                <div className='menu' onClick={() => {
                    setmenuopen(!menuopen)
                }}>
                    <i><MenuIcon /></i>
                </div>

            </div>
        </>
    )
}

export default Navbar