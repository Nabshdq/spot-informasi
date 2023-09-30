import supabase from "./index";

export const getSelectedSpot = async (id) => {
  try {
    const { data, error } = await supabase
      .from("spots")
      .select("*")
      .eq("id", id)
    if (data) return data;
    if (error) throw Error(error)
  } catch (error) {
    throw Error(error);
  }
};

export const getAllSpots = async () => {
  try {
    const { data, error } = await supabase.from("spots").select("*")
    if (data) return data
    if (error) throw Error(error)
  } catch (error) {
    throw Error(error);
  }
}
