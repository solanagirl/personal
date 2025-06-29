'use client'
import {Tabs} from "@heroui/tabs";
import {Tab, Card, CardBody} from "@heroui/react";
import SchoolProgressBar from "./progress";
import { BreadcrumbTerms } from "./breadcrumbs/courses";
import { CourseAccordion, UpcomingCourseAccordion } from "./breadcrumbs/course-accordion";
import { ChonkyCard, HeliusMobilePublishCard } from "@/components/cards";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "./icons";
import HeliusBlogs from "./custom-components/HeliusBlogs 2";
export default function TabBar() {
  return (
    <div className="flex w-1/2 flex-col my-4">
      <Tabs aria-label="Options">
        <Tab key="About Me" title="About Me">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Academics" title="Academics" className="flex gap-8">
            <div>
            <SchoolProgressBar />
          <Card>
            <CardBody>
                <BreadcrumbTerms />
                I am pursuing bachelor of applied science, studying chemical engineering at University of Waterloo!
            </CardBody>
          </Card>
            </div>
          <div>
        <span>4th Year Course Selection</span>
        <UpcomingCourseAccordion />
        <span>Completed Courses</span>
        <CourseAccordion />
      </div>
        </Tab>
        <Tab key="Leadership" title="Leadership">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Contributions" title="Contributions">

          <div className="flex gap-4 flex-wrap">
        <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Developer Experience Engineer <Code color="primary">Helius.dev</Code>
          </span>
        </Snippet>
      </div>
          <HeliusBlogs />
        </Tab>
      </Tabs>
    </div>
  );
}
