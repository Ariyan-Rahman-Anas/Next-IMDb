import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image 
        src="spinner.svg" 
        alt="Loading..." 
        width={200} 
        height={200} 
        priority
      />
    </div>
  );
}