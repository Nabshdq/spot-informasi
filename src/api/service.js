import supabase from "./index";

const getSelectedSpot = async (id) => {
  try {
    const { data } = await supabase
      .from("spot")
      .select()
      .filter("id", "eq", id);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export { getSelectedSpot };
