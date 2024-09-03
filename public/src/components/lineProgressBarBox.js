import {Box, LinearProgress, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const lineProgressBarBox = ({currentHealth, maxHealth = 10, statName}) => {
    const healthPercentage = (currentHealth / maxHealth) * 10 * 10;

    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }} className={"line-progress-bar-box-container"}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <Typography
                    variant="body2"
                    color="textPrimary"
                >
                {statName.replace(/\b\w/g, char => char.toUpperCase())}
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={healthPercentage}
                    sx={{
                        height: 15,
                        borderRadius: 5,
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#00FF00', // Color de la parte rellena
                        },
                        '& .MuiLinearProgress-bar1Determinate': {
                            backgroundColor: '#00FF00', // Asegúrate de que el color se aplique correctamente
                        },
                        backgroundColor: "#D3D3D3"
                    }} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="textSecondary">{`${currentHealth}/${maxHealth}`}</Typography>
            </Box>
        </Box>
    );
};

export default lineProgressBarBox;