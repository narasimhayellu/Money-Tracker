import { Box, TextField } from "@mui/material";

const Search = ({search,setSearch})=>{
    return(
        <Box>
            <TextField value={search} label="Search by Date"
            InputLabelProps={{ shrink: true }} type="date"
            onChange={(e)=>setSearch(e.target.value)} fullWidth/>
        </Box>
    )
}
export default Search;