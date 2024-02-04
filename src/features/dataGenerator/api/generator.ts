import { getResponse } from "@/features/dataGenerator/helpers";

export const fetchGeneratedData = async (payload: string) => {
  let data: string[] = [];

  try {
    payload && (await getResponse(payload, (value) => (data = value)));
  } catch (error) {
    console.log(error);
  } finally {
    return data;
  }
};
