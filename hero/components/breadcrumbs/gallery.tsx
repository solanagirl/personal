'use client'
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react";

export default function Gallery() {
  return (
    <div className="max-w-[720px] gap-2 grid grid-cols-12 grid-rows-2">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
          <h4 className="text-white font-medium text-large">AMY SOLANAGIRL</h4>
        </CardHeader>
        <video controls autoPlay={true} loop={true} muted={true}           className="z-0 w-full h-full object-cover"
        >
          <track />
          <source src="./photos/IMG_2649.MP4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./photos/IMG_6752.JPEG"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">PERENA</p>
          <h4 className="text-white font-medium text-large">Hong Kong</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./photos/IMG_8262.JPEG"
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover "
          src="./photos/token_img.JPEG"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <p className="text-black text-xs">CREATOR CAPITAL MARKETS</p>
         
        </CardFooter>
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Moments</p>
          <h4 className="text-white/90 font-medium text-xl">November 2022</h4>
        </CardHeader>
        <video controls  autoPlay={true} muted={true} >
        <track />
            <source src="./photos/v_breakpoint.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://heroui.com/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Solana University</p>
              <p className="text-tiny text-white/60">Ambassador</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
