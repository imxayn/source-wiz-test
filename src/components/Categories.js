import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import data from "../data";

const IMAGE_URL = "sourcerer.tech/assets/";
const Categories = () => {
  const secondaryCategory = data.map((cat) => cat.secondary_category.name);
  const uniqueCategories = [...new Set(secondaryCategory)];
  console.log(data, "data..123");
  return (
    <>
      {uniqueCategories?.map((ctgry) => {
        return (
          <Paper
            sx={{
              display: "flex",
              m: 2,
              p: 2,
              maxWidth: 400,
              background: "lightgray",
            }}
          >
            <Box display="flex" flexDirection="column">
              <Box mt={1}>{ctgry}</Box>
              <Box mt={1}>
                {secondaryCategory?.filter((c) => c === ctgry).length} Products
              </Box>
              <Box mt={1}>
                <img
                  src="http://placehold.jp/100x100.png"
                  alt="prdct-img"
                  style={{ width: 100, height: 100, mr: 2 }}
                />
                <img
                  src="http://placehold.jp/100x100.png"
                  alt="prdct-img"
                  style={{ width: 100, height: 100, mr: 2 }}
                />

                <img
                  src="http://placehold.jp/100x100.png"
                  alt="prdct-img"
                  style={{ width: 100, height: 100 }}
                />
              </Box>
            </Box>
          </Paper>
        );
      })}
    </>
  );
};

export default Categories;
