import supabase from "./index";

export const getSelectedSpot = async (id) => {
  const { data, error } = await supabase
    .from("spots")
    .select("*")
    .eq("id", id)
  if (data) return data;
  if (error) throw Error(error)

};

export const getAllSpots = async () => {
  const { data, error } = await supabase.from("spots").select("*")
  if (data) return data
  if (error) throw Error(error)

}

export const getSpotsByCategories = async (categoryName) => {
  const { data: categoryData, error: categoryError } = await supabase
    .from("categories")
    .select("id")
    .eq("name", categoryName);

  if (categoryError) {
    throw Error(categoryError.message);
  }
  if (categoryData.length === 0) {
    return [];
  }

  const categoryId = categoryData[0].id;
  const { data: spotsData, error: spotsError } = await supabase
    .from("spots")
    .select("*")
    .eq("id_category", categoryId);

  if (spotsError) {
    throw Error(spotsError.message);
  }

  return spotsData;
};


export const getAllCategoriesName = async () => {
  const { data, error } = await supabase.from("categories").select("name")
  if (data) return data
  if (error) throw Error(error)
}
