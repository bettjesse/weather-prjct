// import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";


// const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const Forecast = ({ data }) => {
//   const dayInAWeek = new Date().getDay();
//   const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
//   return (
//     <>
//       <label className="text-2xl font-bold mt-4">Daily</label>
//       <Accordion allowZeroExpanded>
//         {data.list.splice(0, 7).map((item, idx) => (
//           <AccordionItem key={idx}>
//             <AccordionItemHeading className="bg-gray-200 p-4">
//               <AccordionItemButton className="flex justify-between items-center w-full">
//                 <div className="flex items-center">
//                   <img src={`icons/${item.weather[0].icon}.png`} className="w-10 h-10 mr-4" alt="weather" />
//                   <label className="text-lg font-bold">{forecastDays[idx]}</label>
//                   <label className="text-lg ml-2">{item.weather[0].description}</label>
//                 </div>
//                 <label className="text-lg font-bold">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
//               </AccordionItemButton>
//             </AccordionItemHeading>
//             <AccordionItemPanel className="p-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="flex items-center">
//                   <label className="font-bold">Pressure:</label>
//                   <label className="ml-2">{item.main.pressure}</label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="font-bold">Humidity:</label>
//                   <label className="ml-2">{item.main.humidity}</label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="font-bold">Clouds:</label>
//                   <label className="ml-2">{item.clouds.all}%</label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="font-bold">Wind speed:</label>
//                   <label className="ml-2">{item.wind.speed} m/s</label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="font-bold">Sea level:</label>
//                   <label className="ml-2">{item.main.sea_level}m</label>
//                 </div>
//                 <div className="flex items-center">
//                   <label className="font-bold">Feels like:</label>
//                   <label className="ml-2">{item.main.feels_like}°C</label>
//                 </div>
//               </div>
//             </AccordionItemPanel>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </>
//   );
// };

// export default Forecast;
