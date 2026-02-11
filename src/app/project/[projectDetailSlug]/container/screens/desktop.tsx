import {
  IProcessedImage,
  IProject
} from "@/models/projectinterfaces"

import ArrowButton from "@/shared/container/arrow-button/ArrowButon"
import FilledCircle from '@/assets/background-filled-circle.png'
import Image from "next/image"
import WarningBg from '@/assets/background-warning.png'
import { useSortImage } from "../../usecase/useSortImage"

const ProjectDesktop = ({ project }: { project: IProject }) => {

  const {
    mainImage,
    additionalImages,
    hasVideo
  } = useSortImage(project);

  const renderImage = (image: IProcessedImage) => (
    <div className={`bg-porto-primary rounded-3xl relative ${image.className}`}>
      <Image
        src={image.imageUrl}
        alt={image.alt}
        objectFit="cover"
        fill
        style={{ width: '100%', height: '100%' }}
        className="rounded-3xl"
      />
    </div>
  );

  return (
    <>
      <div className="bg-porto-primary col-span-8 row-span-4 rounded-3xl relative">
        {hasVideo ? (
          <video autoPlay muted preload="none" className="w-full h-full object-cover rounded-3xl" loop playsInline>
            <source src={project.videoUrl} type="video/mp4" />
            <span className="flex items-center justify-center">
              Your browser does not support the video tag.
            </span>
          </video>
        ) : mainImage && (
          <Image
            src={mainImage.imageUrl}
            alt={mainImage.alt}
            objectFit="cover"
            fill
            style={{ width: '100%', height: '100%' }}
            className="rounded-3xl"
          />
        )}
      </div>
      <div className="flex flex-col justify-between bg-porto-primary col-span-4 row-span-4 rounded-3xl p-6 relative">
        <div className="space-y-2">
          <h1 className="font-libre text-[64px] leading-tight font-semibold italic">{project.title}</h1>
          <desc className="text-justify">{project.desc}</desc>
        </div>
        <div className="flex w-full justify-end">
          <ArrowButton
            href={project.websiteUrl ?? '#'}
          />
        </div>
      </div>
      <div className={`${project.isPrivate ? 'row-span-5' : 'row-span-3'} bg-porto-primary col-span-3 rounded-3xl p-6`}>
        <h2 className={`${project.isPrivate ? 'text-[64px]' : 'text-[48px]'} font-libre leading-tight font-semibold italic mb-4`}>Tech Stack</h2>
        <div className="grid grid-cols-3 gap-2">
          {project.techStack.map((dx, idx) => (
            <div
              key={idx * 101}
              className="w-full flex flex-col items-center gap-1 text-center"
            >
              <div className="p-3 bg-white bg-opacity-70 rounded-xl">
                <Image
                  src={dx.imageUrl}
                  alt={dx.name}
                  width={32}
                  height={32}
                />
              </div>
              <p className="font-libre">{dx.name}</p>
            </div>
          ))}
        </div>
      </div>
      {project.isPrivate ? (
        <div className="flex flex-col justify-between bg-porto-primary col-span-6 row-span-5 rounded-3xl p-6 relative">
          <div className="space-y-2">
            <h3 className="font-libre text-[64px] leading-tight font-semibold italic mb-4">Private Project</h3>
            <p className="text-justify">
              I’m really sorry I can’t share more screenshots or details for this project due to its private nature. I still wanted to include it here because I’m really proud of the work, if we ever get to chat, I’d be happy to walk you through what I can.
            </p>
          </div>
          <Image
            src={WarningBg}
            alt="Warning Background"
            style={{ width: '35%', height: '50%' }}
            className="absolute bottom-0 right-0"
          />
        </div>
      ) : additionalImages.map((image: IProcessedImage) => renderImage(image))}
      <div className="flex flex-col justify-between bg-porto-primary col-span-3 row-span-5 rounded-3xl p-6 relative">
        <h3 className="font-libre text-[64px] leading-tight font-semibold italic">Want to see other things?</h3>
        <div className="flex w-full justify-end">
          <ArrowButton text={project.nextProject.title} href={project.nextProject.redirectUrl} />
        </div>
        <Image
          src={FilledCircle}
          alt="Background Circle"
          style={{ width: '70%', height: '50%' }}
          className="absolute bottom-0 left-0"
        />
      </div>
    </>
  )
}

export default ProjectDesktop