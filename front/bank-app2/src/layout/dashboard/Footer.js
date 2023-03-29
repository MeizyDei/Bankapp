
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

const style = {
    backgroundColor: "dark",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

function Footer (props) {
    return(
        <Typography style={style} variant="body2" color="text.secondary" align="center"{...props}>
            {'### '}
            <Link colo="inherit" href="http://localhost:3000/">
                ToDO
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer