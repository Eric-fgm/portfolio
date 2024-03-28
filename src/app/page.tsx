import { getDictionary } from "@/helpers/dictionaries";
import type { PageProps } from "@/helpers/types";

export default async function Page({ params }: PageProps) {
  const { locale = "pl" } = params ?? {};
  const t = (await getDictionary(locale)).home;

  return (
    <main className="slide-left-in relative flex h-full w-full flex-col items-center overflow-auto bg-homepage">
      <div className="min-h-[88px] flex-1" />
      <div className="max-w-[1420px] px-[4%] md:flex md:items-end md:gap-x-12">
        <div className="flex flex-1 flex-col">
          <h5 className="mb-2 text-sm font-medium opacity-60 md:text-base">
            {t.subtitle}
          </h5>
          <h1
            className="text-[44px] font-semibold leading-[1.1] sm:text-6xl md:text-[68px] md:leading-[1.125] lg:text-[86px] lg:leading-[1.1]"
            dangerouslySetInnerHTML={{ __html: t.title }}
          />
          <div className="mt-4 max-w-[340px] text-rg md:mt-16 xl:mt-24">
            <p className="leading-[22px]">
              Lorem ipsum dolor sit amet consectetur. Nunc sem cursus
              consectetur adipiscing. Aliquam fermentum at turpis vitae amet.
              Quis magna diam a in.
            </p>
            <div className="mt-2 font-medium">
              <span>Electronic Technical</span>
              <span className="px-0.5 text-tiny opacity-40"> | </span>
              <span>Computer Science</span>
            </div>
          </div>
        </div>
        <div className="hidden text-rg leading-[22px] md:block md:basis-[40%] lg:basis-[38%] xl:basis-1/3">
          <h4 className="font-medium">Studing at AGH</h4>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Cursus ac amet purus lorem
            lectus morbi sollicitudin risus. Ut volutpat cursus nec eros auctor
            morbi. Fermentum sapien amet varius dignissim vulputate. Massa et
            nunc egestas mattis. Sit nibh praesent faucibus feugiat vitae tempor
            a tortor egestas.
          </p>
          <p className="mt-4">
            Eget sit amet vitae ultricies tincidunt consequat pulvinar tristique
            ultricies. Tristique bibendum cursus augue pellentesque pulvinar.
            Enim diam quis libero dis eu. Quam ullamcorper a phasellus gravida
            nascetur. Augue at quisque nibh ut tortor.
          </p>
          <p className="mt-4 md:hidden lg:block">
            Velit ullamcorper aenean cras ante ornare ullamcorper ac porttitor.
            Ac amet placerat neque aliquam non ultrices sagittis et sed. Diam
            dictumst maecenas aenean auctor odio at non.
          </p>
        </div>
        <div className="mt-4 text-sm font-medium md:hidden">
          Show more informations
        </div>
      </div>
      <div className="min-h-[24px] flex-1" />
    </main>
  );
}
