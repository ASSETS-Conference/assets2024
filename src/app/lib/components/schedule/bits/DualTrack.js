import React from "react";
import Details from "../../Details";
import { FaAward } from "react-icons/fa6";

export default function DualTrack({ content }) {
  return (
    // <Details
    //   open
    //   summary={"Dual Track Session"}
    //   className="sticky top-[8.5rem] md:top-[8.75rem] z-10"
    // >
    <div className="flex flex-row border-x-2 border-y-2 bg-white mb-4">
      <Details
        open
        detailsParentClass="flex-1 "
        summary={content.items[0].room}
        className="sticky top-[8.5rem] md:top-[8.75rem] z-10 "
      >
        {createRow(content.items[0])}
      </Details>
      <Details
        open
        detailsParentClass="flex-1 border-l-2"
        summary={content.items[1].room}
        className="sticky top-[8.5rem] md:top-[8.75rem] z-10 text-sm"
      >
        {createRow(content.items[1])}
      </Details>
    </div>

    // <div className="overflow-x-auto">
    //   <table className="border border-theme-dark">
    //     <thead className="p-4 sticky top-[8.5rem] md:top-[8.75rem] z-10">
    //       <tr>
    //         <th className="text-white ">{content.items[0].room}</th>
    //         <th className="text-white">{content.items[1].room}</th>
    //       </tr>
    //     </thead>
    //     <tbody className="border-x-2 border-y-2 px-2">
    //       <tr className="bg-white">{createRow(content.items)}</tr>
    //     </tbody>
    //   </table>
    // </div>
    // </Details>
  );
}

function createRow(track, altColour) {
  return (
    <ul className="px-2">
      {track.content.map((item, i) => {
        return (
          <li key={`dt-row-${i}`} className="list-none ml-0 md:list-disc md:ml-8 ">
            <p className="text-xs md:text-base font-semibold p-0 -mb-2">
              {item.isSpecial ? <i className="text-theme-blue font-normal not-italic">{`[${item.isSpecial}] `}</i> : null}
              {item.title}
              {item.isBestPaperNom ? <i className="text-theme-orange flex items-center gap-1 not-italic mt-1"><FaAward aria-hidden/>{` Best Paper Nominee`}</i> : null}
            </p>
            <p className="text-[0.65rem] md:text-sm md:leading-loose leading-relaxed italic p-0 -mt-4">
              {item.author}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

// function createRow(tracks) {
//   let trackList = [];
//   for (let trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
//     trackList.push(
//       <td>
//         <ul>
//           {tracks[trackIndex].content.map((item) => {
//             return (
//               <li>
//                 <p className="text-sm md:text-base font-semibold p-0 -mb-2">
//                   {item.title}
//                 </p>
//                 <p className="text-xs md:text-sm leading-loose italic p-0 -mt-4">
//                   {item.author}
//                 </p>
//               </li>
//             );
//           })}
//         </ul>
//       </td>
//     );
//   }
//   return trackList;
// }
