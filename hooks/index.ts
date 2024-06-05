import { GeneratePodcastProps } from "@/types";

export const useGeneratePodcast = ({
  audio,
  setAudio,
  setAudioDuration,
  setAudioStorageId,
  setVoicePrompt,
  voicePrompt,
  voiceType,
}: GeneratePodcastProps) => {
  return {
    isGenerating: false,
    generatePodcast: () => {},
  };
};
