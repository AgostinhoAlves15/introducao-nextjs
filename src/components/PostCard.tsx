
interface post {
  id: number;
  autor: string;
  conteudo: string;
  likes: number;
}

interface PostCardProps {
  Post: post;
  onLike: (id: number) => void;
}

export default function PostCard({ Post, onLike }: PostCardProps){
      return (
    <div className="items-center justify-center text-center">
      <h3 className="text-4xl">{Post.autor}</h3>
      <p className="text-gray-700">{Post.conteudo}</p>
      <button className="bg-rose-300/30 rounded-full hover:bg-rose-600/50" onClick={() => onLike(Post.id)}>Curtir ❤️</button>
      <p className="text-gray-600">{Post.likes} likes</p>
    </div>
  );
}