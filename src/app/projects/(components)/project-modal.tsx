import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "./project-card";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="leading-8 text-accent">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="h-auto w-full rounded-md object-cover"
          />

          {project.description}

          <div className="flex gap-4">
            {project.website ? (
              <Link href={project.website} target="_blank">
                <TbWorld className="h-8 w-8" />
              </Link>
            ) : null}

            <Link href={project.github} target="_blank">
              <FaGithub className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
