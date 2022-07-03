import Box from "@mui/material/Box";
import data from "../data";
import Paper from "@mui/material/Paper";

const IMAGE_URL = "https://sourcerer.tech/assets";
const Categories = () => {
  const secondaryCategory = data.map((cat) => cat.secondary_category.name);
  const uniqueCategories = [...new Set(secondaryCategory)];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        ml: 2,
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
          p: 2,
          ml: 2,
        },
      }}
    >
      {uniqueCategories?.map((ctgry, index) => {
        return (
          <Paper key={index}>
            <Box mt={1} fontWeight="bold">{ctgry}</Box>
            <Box mt={1} mb={1} sx={{fontSize:12}}>
              {secondaryCategory?.filter((c) => c === ctgry).length} Products
            </Box>
            <Box display="flex">
              <img
                src={`${IMAGE_URL}/${
                  data.filter((i) => i.secondary_category.name === ctgry)[0]
                    ?.product_images[0]?.directus_files_id
                }`}
                alt="product_image"
                style={{ width: 70, height: 70 }}
              />
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default Categories;
