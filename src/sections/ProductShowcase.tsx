import productImage from "@/assets/product-image.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="container">
        <div>Boost your productivity</div>
        <h2>A more effective way to track progress</h2>
        <p>
          Effortlessly turn your ideas into a fully functional, response, SaaS website in just minutes with this template.
        </p>
        <Image src={productImage} alt="product Image" className=""/>
      </div>
    </section>
  );
};
