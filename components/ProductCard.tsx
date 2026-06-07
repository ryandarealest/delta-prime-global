import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  slug: string;
  name: string;
  vn: string;
  hero: string;
  short: string;
};

export default function ProductCard({
  slug,
  name,
  vn,
  hero,
  short,
}: ProductCardProps) {
  return (
    <article className="productCard">
      <div className="productMedia">
        <Image
          src={
            slug === "artichoke-tea"
              ? "/images/artichoke.jpg"
              : slug === "agarwood"
                ? "/images/agarwood.jpg"
                : "/images/birdnest.jpg"
          }
          alt={name}
          fill
          className="productImage"
        />
        <span>{vn}</span>
      </div>

      <div className="productContent">
        <p className="eyebrow">Export Ready</p>
        <h3>{name}</h3>
        <strong>{hero}</strong>
        <p>{short}</p>
        <Link href={`/products/${slug}`}>View Specification</Link>
      </div>
    </article>
  );
}
