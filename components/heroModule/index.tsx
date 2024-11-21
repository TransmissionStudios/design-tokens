// components/heroModule/index.tsx
export interface HeroModulePropsType {
    header: string;
    body: string;
    button?: {
      text: string;
      href: string;
    };
    image?: {
      title: string;
      url: string;
    };
  }
  
  const HeroModule = ({ header, body, button, image }: HeroModulePropsType) => {
    return (
      <div className="flex flex-col md:flex-row items-center bg-white justify-center h-full max-w-7xl mx-auto">
        <div className="py-14 px-6 lg:px-24 md:py-24">
          <h1 className="text-green-950 font-bold text-2xl lg:text-5xl">
            {header}
          </h1>
          <p className="text-green-950 py-4" >{body}</p>
          {button && (
            <a href={button.href} target="_blank">
              <button className="rounded-full bg-yellow-600 text-white py-5 px-16 transition-shadow hover:shadow-lg">
                {button.text}
              </button>
            </a>
          )}
        </div>
        {image && (
          <img
            src={image.url}
            alt={image.title}
            className="w-screen md:w-1/2 h-auto"
          />
        )}
      </div>
    );
  };
  
  export default HeroModule;