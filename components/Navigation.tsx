import { useState } from "react";

type SectionProps = {
    title: string,
    sections: Array<string>
}
const Sections: Array<SectionProps> = [
    {
        title:  "Gray Body Radiation",
        sections: [
            "Decentralized Wireless",
            "Helius Development Blogs",
        ]

    },
    {
        title: "Art Gallery",
        sections: [
            "Frame 1",
            "Frame 2",

        ]
    },
    {
        title: "Fun Times",
        sections: [
            "Tweets",
            "Solana Toronto",
            "IslandDAO",
        ]
    },
    {
        title: "Hall of iFrames",
        sections: [
            "Frame 1",
            "Frame 2",

        ]
    }
]

interface NavProps {
    active: string;
    setActive: (key: string) => void;
    items: string[];
  }

export default Sections;
  
export function TopNav({ active, setActive, items }: NavProps) {
    return (
      <ul className="flex-initial text-black flex-grow italic font-bold text-6xl z-50">
        Transient State for a being
      </ul>
    );
  }
  
  interface SubNavProps {
    active: string;
    items: SectionProps[];
  }

  export function SubNav({ active, items }: SubNavProps) {
    const match = items.find(section => section.title === active);
    const se = match?.sections || [];
  
    return (
        <div className="sticky float-right flex-vertical px-md border-l-2">
        {se.map((item, i) => (
          <h4 key={i} className="text-md">
            {item}
          </h4>
        ))}
      </div>
      );
  }
