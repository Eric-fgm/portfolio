"use client";

import Image from "next/image";
import {
  AppWindowMac,
  Boxes,
  BrainCircuit,
  FolderGitIcon,
  Lightbulb,
  LucideIcon,
  Phone,
  Send,
} from "lucide-react";
import { useTranslate } from "@/hooks";
import javascriptImageProps from "/public/images/technologies/javascript.png";
import typescriptImageProps from "/public/images/technologies/typescript.png";
import nextjsImageProps from "/public/images/technologies/nextjs.png";
import nodejsImageProps from "/public/images/technologies/nodejs.png";
import reactjsImageProps from "/public/images/technologies/reactjs.png";
import { Button, Chip, Link } from "@/components";

const Card: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div>
    <Icon />
    <h4 className="mt-4 font-medium">{title}</h4>
    <p className="mt-2 text-sm text-light">{description}</p>
  </div>
);

const iconsMap = {
  ui: BrainCircuit,
  app: AppWindowMac,
  design: Lightbulb,
  development: Boxes,
};

interface ContentProps {}

const Content: React.FC<ContentProps> = () => {
  const t = useTranslate("homePage");

  return (
    t && (
      <>
        <section className="flex flex-col items-center py-16 text-center lg:py-24">
          <Chip icon={Lightbulb} text={t.subtitle} />
          <h1
            className="mt-2 text-6xl font-semibold leading-[1.15] text-white"
            dangerouslySetInnerHTML={{ __html: t.title }}
          />
          <p className="mt-10 max-w-[364px] font-normal leading-[22px] text-light">
            {t.sentence}
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              href="/case-study"
              icon={FolderGitIcon}
              text={t.caseStudy}
              className="py-2 pl-2.5 pr-3.5"
            />
            <Button
              icon={Phone}
              text={t.contact}
              className="py-2 pl-2 pr-3.5"
              blank
              href="#contact"
            />
          </div>
          <p className="mt-2 text-xs text-light">{t.smallDescription}</p>
          <div className="no-scrollbar -mx-4 mt-16 flex items-center gap-12 overflow-x-auto px-4 lg:gap-16">
            <Image
              {...javascriptImageProps}
              alt="javascript icon"
              className="flex-shrink-0"
            />
            <Image
              {...typescriptImageProps}
              alt="typescript icon"
              className="flex-shrink-0"
            />
            <Image
              {...reactjsImageProps}
              alt="reactjs icon"
              className="flex-shrink-0"
            />
            <Image
              {...nextjsImageProps}
              alt="nextjs icon"
              className="flex-shrink-0"
            />
            <Image
              {...nodejsImageProps}
              alt="nodejs icon"
              className="flex-shrink-0"
            />
          </div>
        </section>
        <hr className="mx-auto my-6 w-full max-w-[948px] opacity-10 lg:my-8" />
        <section className="flex flex-col items-center py-16 lg:py-24">
          <p className="text-center font-medium text-[#B8C4DD]">
            {t.skills.subtitle}
          </p>
          <h3 className="mt-4 max-w-[500px] text-center text-3xl leading-[1.3]">
            {t.skills.title}
          </h3>
          <p className="mt-6 text-center font-normal leading-[22px] text-[#B8C4DD]">
            {t.skills.sentence}
          </p>
          <Button
            href="/case-study"
            icon={FolderGitIcon}
            text={t.caseStudy}
            className="mt-8 py-2 pl-2.5 pr-3.5"
          />
          <div className="mt-12 max-w-[260px] xs:max-w-[628px] lg:max-w-[948px]">
            <div className="-m-[18px] flex flex-wrap justify-center">
              {t.skills.cards.map(({ key, title, description }) => (
                <div key={key} className="p-[18px] xs:basis-1/2 lg:basis-1/4">
                  <Card
                    icon={iconsMap[key as keyof typeof iconsMap]}
                    title={title}
                    description={description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="mx-auto my-6 w-full max-w-[948px] opacity-10 lg:my-8" />
        <section
          id="contact"
          className="flex flex-col items-center py-16 text-center lg:py-24"
        >
          <h2
            className="text-6xl font-semibold leading-[1.15] text-white"
            dangerouslySetInnerHTML={{ __html: t.contactTitle }}
          />
          <div className="mt-8 flex gap-4">
            <Button
              icon={Send}
              text={t.sendEmail}
              className="py-2 pl-2.5 pr-3.5"
              href="mailto:erk.yo38@gmail.com"
            />
          </div>
        </section>
        <div className="mx-auto w-full max-w-[948px]">
          <hr className="mt-8 opacity-10" />
          <div className="flex justify-between pt-4 text-sm text-[#B8C4DD] lg:pt-8">
            <p>
              © {new Date().getFullYear()} {t.copyRights}
            </p>
            <Link
              href="https://github.com/Eric-fgm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default Content;
