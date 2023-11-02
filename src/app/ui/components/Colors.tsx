"use client"
import React, { useState } from 'react';
import './colors.scss'

// const Colors = ({ colors }) => {
//     const [selectedColor, setSelectedColor] = useState(null);

//     const handleColorClick = (color) => {
//         if (selectedColor === color) {
//             // Deselect the color if it's already selected
//             setSelectedColor(null);
//         } else {
//             // Select the color when clicked
//             setSelectedColor(color);
//         }
//     };

//     return (
//         <div className="colors-container">
//             <div className='title'>Color</div>
//             <div className="color-options">

//                 {colors?.map((color, index) => (
//                     <button
//                         key={index}
//                         className={`color-option ${selectedColor === color ? 'selected' : ''}`}
//                         style={{ backgroundColor: color }}
//                         onClick={() => handleColorClick(color)}
//                     ></button>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Colors