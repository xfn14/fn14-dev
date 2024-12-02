import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  website: string | null;
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      className="cursor-pointer transition-shadow hover:shadow-lg"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
          <p className="text-accent-foreground">{project.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
