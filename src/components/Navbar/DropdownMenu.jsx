import Hamburger from 'hamburger-react';
import {useState} from 'react'

function DropdownMenu(props) {
    const [display, setDisplay] = useState('none');

    function mobileClickHandler() {
        if(display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }
    
    return (
        <div className="fixed left-0 top-24 bg-gray-800 w-2/5 h-full" >
            Text
        </div>

        // <div>
        //  <div onClick={mobileClickHandler} className="absolute">
        //     <Hamburger />
        //     <div style={{display:display}} className="relative">
        //         {props.children}
        //     </div>
        //  </div>
        // </div>
    );
}


export default DropdownMenu;