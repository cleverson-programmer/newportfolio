import video500 from '../../assets/globe-500.mp4'
// import video900 from '../../assets/globe-900.mp4'
import Box from '@mui/material/Box';
import './style.css'

export default function Header() {
  return (
    <Box 
    component="header"
    sx={{
    backgroundColor: "#040E1E",
    p: 2,
    height: "100dvh",
    width:"100%",
    display: "flex",
    justifyContent: "center",
    }}>
      <video autoPlay loop muted
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "900px",
        maxHeight: "100%",
        objectFit: "contain"
      }} >
        <source 
        src={video500} 
        type="video/mp4"/>
        Seu navegador não suporta a tag de vídeo.
      </video>
    </Box>
  );
}