import { RevealOnScroll } from "@/components/RevealOnScroll";
import { containerVariants } from "@/utils/animations.ts";
import { Image } from "@heroui/image";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <RevealOnScroll
      variants={containerVariants}
      className="flex flex-col items-center"
    >
      <footer className="bg-dark-gray container mx-auto rounded-[3rem] mt-10 pt-10 px-10 flex flex-col gap-20">
        <div className="grid grid-cols-3 gap-10">
          <div className="text-white">
            <h3 className="text-4xl font-bold mb-4 text-[#FFD6F6]">O nás</h3>
            <p>
              Sme slovenská značka, ktorá spája svet 3D tlače, flokovania a
              vzdelávania.
              <br /> Tvoríme s presnosťou, nápadom a vášňou – pre tých, čo chcú
              viac než len priemer.
            </p>
          </div>

          <div className="text-[#E7E7E3CC]">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD6F6]">Podpora</h3>
            <Link
              to={"/"}
              className="block mb-2 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Všeobecné obchodné podmienky
            </Link>
            <Link
              to={"/"}
              className="block mb-2 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Kontakt
            </Link>
          </div>
          <div className="text-[#E7E7E3CC] ">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD6F6]">
              Sleduj nás
            </h3>
            <Link
              to={"/"}
              className="block mb-2 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="block mb-2 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Instagram
            </Link>
          </div>
        </div>

        <Image removeWrapper={true} src="../../public/logo--secondary.svg" />
      </footer>

      <span className="text-center mt-10 text-[#E7E7E3CC]">
        © 2025 3D-Family. Všetky práva vyhradené.
        <br />
        Web vytvoril Jakub Perďoch.
      </span>
    </RevealOnScroll>
  );
}
