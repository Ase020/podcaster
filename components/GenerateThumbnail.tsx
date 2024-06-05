import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { GenerateThumbnailProps } from "@/types";
import { LoaderCircle, Variable } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { useToast } from "./ui/use-toast";
import { title } from "process";

function GenerateThumbnail({
  setImage,
  setImageStorageId,
  image,
  imagePrompt,
  setImagePrompt,
}: GenerateThumbnailProps) {
  const [isAIThumbnail, setIsAIThumbnail] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImage = async (blob: Blob, filename: string) => {
    setIsImageLoading(true);
    setImage("");

    try {
    } catch (error) {
      console.error("Error: ", error);
      toast({ title: "ErRor generating thumbnail", variant: "destructive" });
    }
  };

  const generateImage = async () => {};

  async function uploadImage(e: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <>
      <div className="generate_thumbnail">
        <Button
          type="button"
          variant="plain"
          className={cn("", { "bg-black-6": isAIThumbnail })}
          onClick={() => setIsAIThumbnail(true)}
        >
          Use AI to generate thumbnail
        </Button>

        <Button
          type="button"
          variant="plain"
          className={cn("", { "bg-black-6": !isAIThumbnail })}
          onClick={() => setIsAIThumbnail(false)}
        >
          Upload custom image
        </Button>
      </div>

      {isAIThumbnail ? (
        <div className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <Label className="text-16 font-bold text-white-1">
              AI Prompt to Generate Thumbnail
            </Label>

            <Textarea
              className="input-class font-light focus-visible:ring-offset-orange-1"
              placeholder="Provide text to generate thumbnail"
              rows={5}
              value={imagePrompt}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setImagePrompt(e.target.value)
              }
            />
          </div>

          <div className="w-full max-w-[200px]">
            <Button
              type="submit"
              className="text-16 bg-orange-1 py-4 font-bold text-white-1"
              onClick={generateImage}
            >
              {isImageLoading ? (
                <>
                  <LoaderCircle className="animate-spin size-4" />
                  <span className="ml-1.5">Generating...</span>
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="image_div" onClick={() => imageRef.current?.click()}>
          <Input
            type="file"
            className="hidden"
            ref={imageRef}
            onChange={(e) => uploadImage(e)}
          />

          {!isImageLoading ? (
            <Image
              src="/icons/upload-image.svg"
              alt="upload"
              width={40}
              height={40}
            />
          ) : (
            <div className="flex-center text-16 font-medium text-white-1">
              <LoaderCircle size={20} className="animate-spin" />
              <span className="ml-1.5">Generating...</span>
            </div>
          )}

          <div className="flex flex-col items-center gap-1">
            <h2 className="text-12 font-bold text-orange-1">Click to Upload</h2>
            <p className="text-12 font-normal text-gray-1">
              SVG, JPG, PNG, JPEG or GIF (max: 1080x1080px)
            </p>
          </div>
        </div>
      )}

      {image && (
        <div className="flex-center w-full">
          <Image
            src={image}
            width={200}
            height={200}
            className="mt-5"
            alt="thumbnail"
          />
        </div>
      )}
    </>
  );
}

export default GenerateThumbnail;
