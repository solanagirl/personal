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
import TabBar from "@/components/tabs";
import Gallery from "@/components/breadcrumbs/gallery";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <br />
        <span className={title({ color: "violet" })}>Amy&nbsp;</span>

        <span className={title()}>
          SOLANAGIRL
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Currently Streaming.
        </div>
      </div>
      <Gallery />
  <TabBar />
    </section>
  );
}
