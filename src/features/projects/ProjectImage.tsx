interface ProjectImageProps {
  image: string;
  previewLink: string;
}

const ProjectImage = ({ image, previewLink }: ProjectImageProps) => (
  <div className="group relative w-full cursor-pointer xmd:py-10 slg:py-0">
    <a
      href={previewLink}
      target="_blank"
      className="relative z-[1] block w-full rounded-md bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
    >
      <div className="constrast-100 rounded-md mix-blend-multiply brightness-90 grayscale transition duration-0 group-hover:brightness-100 group-hover:grayscale-0">
        <div className="block">
          <img
            className="static bottom-0 left-0 right-0 top-0 block aspect-[1.6] w-full rounded-md"
            src={image}
            alt="Project preview"
          />
        </div>
        <img
          src={image}
          className="absolute bottom-0 left-0 right-0 top-0 aspect-[1.6] w-full rounded-md"
          alt="Project preview"
        />
      </div>
    </a>
  </div>
);

export default ProjectImage;
