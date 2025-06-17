"use client";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

interface CardProps {
  imageSrc: string,
  imageText: string,
  imageLinkText: string,
  cardText: string,
  footerLink: string,
  footerText: string
}

export function CardWithDivider({imageSrc, imageText, imageLinkText, cardText, footerLink, footerText}: CardProps) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src={imageSrc}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{imageText}</p>
          <p className="text-small text-default-500">{imageLinkText}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{cardText}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={footerLink}>
          {footerText}
        </Link>
      </CardFooter>
    </Card>
  );
}


interface CardWithImageProps {
  imageSrc: string,
  cardText: string,
  cardTextSm: string,
  cardTitle: string,

}

export function CardWithImage({imageSrc, cardText, cardTextSm, cardTitle}:CardWithImageProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{cardText}</p>
        <small className="text-default-500">{cardTextSm}</small>
        <h4 className="font-bold text-large">{cardTitle}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
