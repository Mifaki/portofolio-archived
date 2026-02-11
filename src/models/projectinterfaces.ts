export interface IProject {
  title: string;
  slug: string;
  desc: string;
  isPrivate?: boolean;
  websiteUrl?: string;
  videoUrl?: string;
  images: IProjectImage[];
  techStack: IProjectTechStack[];
  nextProject: INextProject;
}

export interface IProjectTechStack {
    imageUrl: string;
    name: string;
}

export interface IProjectImage {
    position: number;
    imageUrl: string;
    alt: string;
}

export interface INextProject {
    title: string;
    redirectUrl: string;
}

export interface IProcessedImage extends IProjectImage {
    className: string;
}