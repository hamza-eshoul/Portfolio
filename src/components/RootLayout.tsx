import EmailLink from "@/components/EmailLink";
import SocialLinks from "@/components/SocialLinks";

interface RootlayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootlayoutProps) => {
  return (
    <div className="bg-primaryColor text-tertiaryColor xsm:px-[25px] xmd:px-[100px] xlg:px-40 min-h-screen px-[20px] font-sans leading-[1.3] antialiased sm:px-[50px]">
      <main className="mx-auto max-w-5xl">{children}</main>
      <SocialLinks />
      <EmailLink />
    </div>
  );
};

export default RootLayout;
