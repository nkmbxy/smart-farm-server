import { supabase } from "../lib/supabase";

export const uploadImage = async (file: any) => {
  const fileName = `/disease/${Date.now()}.jpg`;

  const { error } = await supabase.storage
    .from("smartFarm")
    .upload(fileName, file.buffer, { 
      cacheControl: "image/jpg",
    contentType : "image/jpg"
    });

  if (error) {
    throw error;
  }

  const { data } = await supabase.storage
    .from("smartFarm")
    .getPublicUrl(fileName);

  return data.publicUrl;
};