import { getDictionary } from "@/helpers/get-dictionary";
import type { Locale } from "@/helpers/i18n-config";

interface PageProps {
  params: { locale: Locale };
}

export default async function Page({ params: { locale } }: PageProps) {
  const t = await getDictionary(locale);

  return (
    <main className="relative flex items-center w-full h-full bg-homepage">
      <div className="mx-auto max-w-[1360px] flex items-end">
        <div className="flex flex-col flex-1">
          <h5 className="mb-2 text-base font-medium opacity-60">
            Visualizer & Interactive
          </h5>
          <h1 className="text-[90px] leading-[1.15] font-semibold">
            Web Developer Portfolio
          </h1>
          <p className="mt-28 max-w-[340px] text-sm leading-[22px]">
            Lorem ipsum dolor sit amet consectetur. Nunc sem cursus consectetur
            adipiscing. Aliquam fermentum at turpis vitae amet. Quis magna diam
            a in.
          </p>
        </div>
        <div className="text-sm leading-[22px] basis-[36%]">
          <h4 className="font-medium">Studing at AGH</h4>
          <p className="mt-2 ">
            Lorem ipsum dolor sit amet consectetur. Cursus ac amet purus lorem
            lectus morbi sollicitudin risus. Ut volutpat cursus nec eros auctor
            morbi. Fermentum sapien amet varius dignissim vulputate. Massa et
            nunc egestas mattis. Sit nibh praesent faucibus feugiat vitae tempor
            a tortor egestas.
          </p>
          <p className="my-4">
            Eget sit amet vitae ultricies tincidunt consequat pulvinar tristique
            ultricies. Tristique bibendum cursus augue pellentesque pulvinar.
            Enim diam quis libero dis eu. Quam ullamcorper a phasellus gravida
            nascetur. Augue at quisque nibh ut tortor.
          </p>
          <p>
            Velit ullamcorper aenean cras ante ornare ullamcorper ac porttitor.
            Ac amet placerat neque aliquam non ultrices sagittis et sed. Diam
            dictumst maecenas aenean auctor odio at non.
          </p>
        </div>
      </div>
    </main>
  );
}
