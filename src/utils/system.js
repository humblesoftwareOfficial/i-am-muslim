export const weatherKelvinToCelcius = (value = 0) => Math.round(value - 273.15);

export const limiTasbihDefaultValue = (limitTasbih, pearlPerView = 5) => {
  try {
    let cpt = limitTasbih;
    const objects = [];
    if (cpt <= pearlPerView) {
      for (let i = 0; i < pearlPerView; i++) {
        if (cpt) {
          objects.push({
            key: cpt,
          });
        } else {
          return objects.reverse();
        }
        cpt--;
      }
      return objects.reverse();
    }

    for (let i = 1; i < pearlPerView + 1; i++) {
      if (cpt && cpt > pearlPerView) {
        objects.push({
          key: cpt,
        });
      } else {
        return objects.reverse();
      }
      cpt--;
    }
    return objects.reverse();
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export const isFieldWithValue = (field) =>
  field && field?.replace(/\s/g, "")?.length;

export const truncateText = (text = "", endTo = 25) =>
  text?.length > endTo ? `${text.substr(0, endTo)}...` : text;

export const formatNumber = (num, div = " ") =>
  num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, div) || "";

export const onlyContainsNumber = (value) =>
  isFieldWithValue(value) && /^\d+$/.test(value);
