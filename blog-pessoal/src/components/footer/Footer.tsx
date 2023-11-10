import { GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex bg-primary justify-center text-white ">
        <div className="flex flex-col items-center py-4">
          <p className="text-xl font-bold">Blog pessoal Generation</p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-4">
            <GithubLogo size={48} weight="bold" />
            <LinkedinLogo size={48} weight="bold" />
            <InstagramLogo size={48} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;