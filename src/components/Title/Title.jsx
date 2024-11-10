import { Box, Typography } from "@mui/material";

export function Title(){
    return(
        <Box
        component="div"
        sx={{
            marginTop:"6rem",
            padding:"1rem",
            position: "absolute",
            width:"100%",
        }}
        >
            <Typography 
            variant="h1" 
            component="h1"
            sx={{
                display:"flex",
                flexDirection:"column",
                color: "#F0F6FC",
            }}
            >
              Hello, my name is 
              
            <span>
                CLEVERSON
            </span>
            </Typography>
            <Typography variant="subtitle1" component="p">
              Front-end Software Developer
            </Typography>
        </Box>
    )
}