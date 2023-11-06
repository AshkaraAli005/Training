// import React, { useState } from 'react';
// import { Avatar, Dropdown, Menu, Button } from 'antd';

// const ProfileDropdown = () => {
//   const [visible, setVisible] = useState(false);

//   const handleMenuClick = (e) => {
//     if (e.key === 'profile') {
//       // Handle profile click
//     } else if (e.key === 'settings') {
//       // Handle settings click
//     } else if (e.key === 'logout') {
//       // Handle logout click
//     }
//     setVisible(false);
//   };

//   const menu = (
//     <Menu onClick={handleMenuClick}>
//       <Menu.Item key="profile">Profile</Menu.Item>
//       <Menu.Item key="settings">Settings</Menu.Item>
//       <Menu.Item key="logout">Logout</Menu.Item>
//     </Menu>
//   );

//   return (
//     <Dropdown
//       overlay={menu}
//       trigger={['click']}
//       visible={visible}
//       onVisibleChange={(visible) => setVisible(visible)}
//     >
//       <div>
//         <Avatar
//           size={64}
//           src="https://example.com/profile-image.jpg" // Replace with the actual profile image URL
//           onClick={() => setVisible(!visible)}
//         />
//       </div>
//     </Dropdown>
//   );
// };

// export default ProfileDropdown;
