// "use client";

// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuroraBackground } from "../src/components/ui/aurora-background";
// import logo from './assets/cnnet.png';
// import { Login } from "./component/Login";
// import { Register } from "./component/Register";

// export function AuroraBackgroundDemo() {
//   const [currentView, setCurrentView] = useState('login');
//   const navigate = useNavigate();

//   const handleNavigateToRegister = () => {
//     setCurrentView('register');
//     navigate('/register');
//   };

//   const handleNavigateToLogin = () => {
//     setCurrentView('login');
//     navigate('/login');
//   };

//   return (
//     <AuroraBackground
//       className="bg-black dark:bg-neutral-900 relative overflow-hidden"
//       style={{
//         background: "linear-gradient(360deg, black, #18eaf1)",
//       }}
//     >
//       {/* Logo at the top */}
//       <div className="absolute top-10 left-10"> {/* Adjust position as needed */}
//         <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Adjust size as needed */}
//       </div>

//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >
//         {currentView === 'login' ? (
//           <Login onNavigateToRegister={handleNavigateToRegister} />
//         ) : (
//           <Register onNavigateToLogin={handleNavigateToLogin} />
//         )}
//       </motion.div>
//     </AuroraBackground>
//   );
// }
