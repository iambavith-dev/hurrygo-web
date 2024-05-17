import Image from "next/image";
import image from '../public/img.png'

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Image src={image} alt="khb" layout="fill" />
    </main>
  );
}
