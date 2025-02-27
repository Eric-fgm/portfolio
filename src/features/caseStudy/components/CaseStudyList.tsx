"use client";

import Link from "next/link";
import Image from "next/image";
import zseDashboardProps from "/public/images/case-study/zse-dashboard.png";
import dragAndDropProps from "/public/images/case-study/drag-and-drop.png";
import etherServeProps from "/public/images/case-study/ether-serve.png";
import etherAuthProps from "/public/images/case-study/ether-auth.png";
import todoProps from "/public/images/case-study/todo.png";
import wingleProps from "/public/images/case-study/wingle.png";
import blankProps from "/public/images/case-study/blank.png";
import { useCaseStudyFilters } from "../providers/CaseStudyFiltersProvider";
import { useTranslate } from "@/hooks";

const projectsMap = {
  "Ether Auth": {
    image: etherAuthProps,
    categories: {
      library: true,
      backend: true,
    },
  },
  "Ether Serve": {
    image: etherServeProps,
    categories: {
      library: true,
      backend: true,
    },
  },
  "Fieve CMS": {
    image: blankProps,
    categories: {
      library: true,
      crud: true,
      backend: true,
    },
  },
  "Fieve ORM": {
    image: blankProps,
    categories: {
      library: true,
      backend: true,
    },
  },
  Wingle: {
    image: wingleProps,
    categories: {
      realtime: true,
      frontend: true,
    },
  },
  "Todo App": {
    image: todoProps,
    categories: {
      crud: true,
      frontend: true,
      backend: true,
    },
  },
  "Drag & Drop": {
    image: dragAndDropProps,
    categories: {
      frontend: true,
    },
  },
  "ZSE Dashboard": {
    image: zseDashboardProps,
    categories: {
      crud: true,
      frontend: true,
      backend: true,
    },
  },
} as any;

interface CaseStudyListProps {}

const CaseStudyList: React.FC<CaseStudyListProps> = () => {
  const t = useTranslate("caseStudyPage");
  const { categories } = useCaseStudyFilters();

  const filteredProjects = t.projects.filter(
    (project) =>
      !categories.length ||
      categories.some(
        (category) => (projectsMap[project.name].categories as any)[category],
      ),
  );

  return (
    <div className="-m-2 flex flex-wrap gap-y-4">
      {filteredProjects.map(({ name, description, link }) => (
        <div key={name} className="p-2 md:basis-1/2 lg:basis-1/3">
          <div className="relative flex h-full flex-col">
            <Link
              className="absolute left-0 top-0 h-full w-full"
              target="_blank"
              href={link}
            />
            <div className="bg-homepage-secondary rounded-2xl p-4">
              <Image
                {...projectsMap[name].image}
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className="py-3 pl-3">
              <h5>{name}</h5>
              <p className="text-light mt-0.5 text-sm">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudyList;
