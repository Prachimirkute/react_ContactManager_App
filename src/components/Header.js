import React from "react";
const Header = () =>{
    return(
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
            </div>
        </div>
    );
}
// import React, { useState } from 'react'
// import style from "./Header.module.css"
// import Logo from "../../assets/logo.png"
// import { CgShoppingBag } from "react-icons/cg"
// import { GoThreeBars } from 'react-icons/go'
// const Header = () => {
// const [ShowMenu, setShowMenu] = useState(true)
//   const toggleMenu =()=>{
//     setShowMenu((ShowMenu)=>!ShowMenu)
//   }
//   return (
//     <div className={style.container}>
//       <div className={style.logo}>
//         <img src={Logo} alt="logo" />
//         <span>amazon</span>

//       </div>


//       <div className={style.right}>
//         <div className={style.bars} onClick={toggleMenu} >
//           <GoThreeBars />
//         </div>
//           <ul className={style.menu} style={{display:ShowMenu? 'inherit': 'none'}}>
//             <li>Collections</li>
//             <li>Brands</li>
//             <li>New</li>
//             <li>Sales</li>
//             <li>ENG</li>
//           </ul>

//         <input type="text" placeholder="Search" className={style.search} />
//         <CgShoppingBag className={style.cart} />
//       </div>
//     </div>
//   )
// }

export default Header;