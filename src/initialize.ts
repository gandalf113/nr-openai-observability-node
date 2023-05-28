import { OpenAIApi } from 'openai';

import { createEventClient, EventClientOptions } from './eventsClient';
import { creteMonitor } from './monitor';

export const initializeOpenAI = (
  openAIApi: OpenAIApi,
  eventClientOptions?: EventClientOptions
) => {
  const eventClient = createEventClient(eventClientOptions);
  const monitor = creteMonitor(openAIApi, eventClient);
  monitor.start();
};
