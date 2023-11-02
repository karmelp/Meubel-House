"use client"
import React, { useState } from 'react';
import './sizes.scss'

// const Sizes = ({ sizes }) => {
//   const [selectedSize, setSelectedSize] = useState(null);

//   const handleSizeClick = (size) => {
//     if (selectedSize === size) {
//       // Deselect the size if it's already selected
//       setSelectedSize(null);
//     } else {
//       // Select the size when clicked
//       setSelectedSize(size);
//     }
//   };

//   return (
//     <div className="sizes-container">
//       <div className='title'>Size</div>
//       <div className='size-options'>
//         {sizes?.map((size, index) => (
//           <button
//             key={index}
//             className={selectedSize === size ? 'selected' : ''}
//             onClick={() => handleSizeClick(size)}
//           >
//             {size}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Sizes
