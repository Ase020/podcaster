import React from "react";
import { GeneratePodcastProps } from "@/types";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";
import { useGeneratePodcast } from "@/hooks";

function GeneratePodcast({
  audio,
  setAudio,
  setAudioDuration,
  setAudioStorageId,
  setVoicePrompt,
  voicePrompt,
  voiceType,
}: GeneratePodcastProps) {
  const { isGenerating, generatePodcast } = useGeneratePodcast({
    audio,
    setAudio,
    setAudioDuration,
    setAudioStorageId,
    setVoicePrompt,
    voicePrompt,
    voiceType,
  });

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to Generate Podcast
        </Label>

        <Textarea
          className="input-class font-light focus-visible:ring-offset-orange-1"
          placeholder="Provide text to generate audio"
          rows={5}
          value={voicePrompt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setVoicePrompt(e.target.value)
          }
        />
      </div>

      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 py-4 font-bold text-white-1"
          onClick={generatePodcast}
        >
          {isGenerating ? (
            <>
              <LoaderCircle className="animate-spin size-4" />
              <span className="ml-1.5">Generating...</span>
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>

      {audio && (
        <audio
          src={audio}
          autoPlay
          controls
          className="mt-5"
          onLoadedMetadata={(
            e: React.SyntheticEvent<HTMLAudioElement, Event>
          ) => setAudioDuration(e.currentTarget.duration)}
        />
      )}
    </div>
  );
}

export default GeneratePodcast;
