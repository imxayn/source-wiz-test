import Box from "@mui/material/Box";
import data from "../data";
import Card from "@mui/material/Card";

const IMAGE_URL = "https://sourcerer.tech/assets";
const Categories = () => {
  const secondaryCategory = data.map((cat) => cat.secondary_category.name);
  const uniqueCategories = [...new Set(secondaryCategory)];
  return (
    <Box>
      {uniqueCategories?.map((ctgry) => {
        return (
          <Card sx={{ maxWidth: 275, padding: 2, margin: 2 }} p={2} m={2}>
            <Box display="flex" flexDirection="column" mb={2}>
              <Box mt={1}>{ctgry}</Box>
              <Box mt={1}>
                {secondaryCategory?.filter((c) => c === ctgry).length} Products
              </Box>
            </Box>
            {data
              .filter((id) => id.secondary_category.name === ctgry)
              .map((image) => {
                return (
                  <img
                    src={`${IMAGE_URL}/${image.product_images[0]?.directus_files_id}`}
                    style={{ width: 70, height: 70 }}
                  />
                );
              })}
          </Card>
        );
      })}
    </Box>
  );
};

export default Categories;
