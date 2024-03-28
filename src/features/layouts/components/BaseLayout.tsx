import Navigation from "@/features/layouts/components/Navigation";

const BaseLayout: React.FC<
  React.PropsWithChildren & React.HTMLAttributes<HTMLBodyElement>
> = ({ children, ...props }) => {
  return (
    <body {...props}>
      <Navigation />
      <main className="px-4 pb-4 pt-18 lg:px-8 lg:pb-8">{children}</main>
    </body>
  );
};

export default BaseLayout;
