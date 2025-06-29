import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ChonkyCard, HeliusMobilePublishCard } from "@/components/cards";
import SchoolProgressBar from "@/components/progress";
import { BreadcrumbTerms } from "@/components/breadcrumbs/courses";
import {CourseAccordion, UpcomingCourseAccordion} from "@/components/breadcrumbs/course-accordion";
import Gallery from "@/components/breadcrumbs/gallery";
import { Chat } from "@/components/ai-components/chat";
import HeliusBlogs from "@/components/custom-components/HeliusBlogs 2";

export default function Home() {
  return (
    <section className="flex flex-col  max-w-screen items-center justify-center gap-20 py-8 md:py-10">
      <div className="inline-block  text-center justify-center z-30 overflow-hidden">
         
        <br />
        <span className={title({ color: "violet" })}>Amy&nbsp;</span>
        <span className={title()}>
          SOLANAGIRL
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Currently Streaming.
        </div>
      </div>

      <div className="w-full flex flex-row justify-center gap-2 sm:flex-wrap md:flex-nowrap">
      <Chat />
      <Gallery />
      </div>
        <div className="w-full flex z-50">
            <iframe src="https://askorb.xyz" width={900} height={600} />
            <Chat />
        </div>     
        <HeliusBlogs />
    </section>
  );
}
