
import LikeButton from "@/components/LikeresButton";

export default function Filter() {
  const frutas = ["maçã", "melancia", "uva", "banana"];

  const result = frutas.filter((fruta) => {
    const firstLetter = fruta[0];

    const lastLetter = fruta[fruta.length -1]

    if (firstLetter == "m" && lastLetter=='a') {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);

  return <div>
    <LikeButton/>
  </div>;
}
