import { createParser } from "eventsource-parser";

async function* streamAsyncIterable<T>(stream: ReadableStream<T>) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

export const getResponse = async (
  payload: string,
  onSuccess: (event: string[]) => void
) => {
  const response = await fetch(
    "https://chat.openai.com/backend-api/conversation",
    {
      method: "POST",
      body: JSON.stringify({
        action: "next",
        messages: [
          {
            id: "baa2634b-58e2-423e-ae34-88f25677d2d5",
            author: {
              role: "user",
            },
            content: {
              content_type: "text",
              parts: [`Podaj 10 ${payload} jako JSON`],
            },
            metadata: {},
          },
        ],
        model: "text-davinci-002-render-sha",
        parent_message_id: "baa2634b-58e2-423e-ae34-89f25677d2d5",
      }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJlcmsueW8zOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLVBCOVJRWDVlYkgwbFp2VjAwbjE4dHlRQyIsInVzZXJfaWQiOiJ1c2VyLU9qSjFnNFljWDlyU1NJS0ZFVm9PbnBnaSJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTM0MjIxOTQwODQ5NDI4MjMxMTkiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzA1OTY4Mzk1LCJleHAiOjE3MDY4MzIzOTUsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIn0.pI2lQK_zrCwFvuiT0LSWlzxhhICTVRaXdBBuE8VsiMXJxGD85B2Ue2osT8mLnOFv91KZTbSn7WtSWToPWAOButuHmBBTrX4S8Oyat3mhwU7DmdP17-uZ8yjio2wArbzzU1c2H8hW4ZxSn8GyjjvCS8gPn5Lr0YFhmJzaROROhrLbhDZUCp3LW3qQ7Uw_h53s6qTyqPc7kic5Di-9bYJutkpy4oiTwCQWCEHiGD_CenGwOozJViKAryKEPQTWk9uE9AdWxaOCNN2Nvl3vJf8lB_F6_j1bFQ5gyC1PcGaMn1u7XiwDAFvuhOopTHKZCAweeAi4v-EuOdRbGC1H6YWtdg",
        Accept: "text/event-stream",
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.body || !response.ok) throw new Error(response.statusText);

  let buildMessage = "";

  const parser = createParser((event) => {
    if (event.type === "event" && event.data === "[DONE]") {
      const result = JSON.parse(
        buildMessage.split("```")?.[1]?.split("json\n")?.[1] ?? "[]"
      );

      onSuccess(rec(result));
    } else if (event.type === "event") {
      const obj = JSON.parse(event.data);

      if ("message" in obj) {
        buildMessage = obj.message.content.parts[0];
      }
    }
  });

  for await (const chunk of streamAsyncIterable(response.body)) {
    const str = new TextDecoder().decode(chunk);
    parser.feed(str);
  }
};

const rec = (data: any, deep = 0) => {
  if (deep > 9) return [];
  if (Array.isArray(data)) {
    if (data.some((val) => typeof val === "object")) {
      return rec(
        data.map((obj) => Object.values(obj)[0]),
        deep + 1
      );
    } else {
      return data;
    }
  } else {
    return rec(Object.values(data)[0], deep + 1);
  }
};
