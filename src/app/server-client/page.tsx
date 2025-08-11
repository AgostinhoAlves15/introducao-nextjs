import ThemeToggle from "@/components/ThemeToggle";
import LikeButton from "@/components/LikeButton";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1>Bem-vindo!</h1>
      <ThemeToggle />
      <LikeButton initial={0}/>
    </main>
  );
}
