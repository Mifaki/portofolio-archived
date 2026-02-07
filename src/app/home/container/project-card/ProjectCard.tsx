import Image, { StaticImageData } from "next/image";

import ArrowButton from "@/shared/container/arrow-button/ArrowButon";
import MoreToComeImage from '@/assets/more_to_come.png';
import React from 'react';

interface IProjectCard extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    redirectUrl?: string;
    image?: StaticImageData;
    imageHeight: 90 | 100;
    isEmpty?: boolean;
}

const ProjectCard = ({
    name,
    redirectUrl,
    image,
    imageHeight,
    isEmpty = false,
    ...containerProps
}: IProjectCard) => {
    return (
        <div
            className={`bg-porto-primary rounded-3xl p-6 relative space-y-2 ${containerProps.className} overflow-hidden`}
        >
            <h2 className="font-libre italic text-3xl lg:text-4xl lg:leading-[100%] font-semibold mb-2">
                {(() => {
                    const t = (!isEmpty ? name : "Your Project Here") || "";
                    const w = t === "Your Project Here"
                        ? ["Your Project", "Here"]
                        : t.split(' ');
                    return w.map((word, index) => (
                        <React.Fragment key={index}>
                            {word}
                            {index !== w.length - 1 && <br />}
                        </React.Fragment>
                    ));
                })()}
            </h2>
            {!isEmpty && (
                <ArrowButton href={redirectUrl} />
            )}
            {!isEmpty ? (
                <>
                    <Image
                        src={image ?? ''}
                        alt={name ?? 'Project Image'}
                        className="hidden lg:block absolute bottom-0 right-0 object-cover rounded-br-3xl"
                        style={{ width: '74%', height: `${imageHeight}%` }}
                        draggable={false}
                    />
                    <Image
                        src={image ?? ''}
                        alt={name ?? 'Project Image'}
                        className="block lg:hidden absolute -bottom-4 right-0 object-cover rounded-br-3xl"
                        style={{ width: '100%', height: `79%` }}
                        draggable={false}
                    />
                </>
            ) : (
                <>
                        <Image
                            src={MoreToComeImage}
                            alt={'More to Come'}
                            className="hidden lg:block absolute bottom-0 right-0 object-cover rounded-br-3xl"
                            style={{ width: '74%', height: `${imageHeight}%` }}
                            draggable={false}
                        />
                        <Image
                            src={MoreToComeImage}
                            alt={'More to Come'}
                            className="block lg:hidden absolute -bottom-4 right-0 object-cover rounded-br-3xl"
                            style={{ width: '100%', height: `79%` }}
                            draggable={false}
                        />
                </>
            )}
        </div>
    );
};

export default ProjectCard;