import styles from "./page.module.css";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <main style={{ padding: 4 }}>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Management
        </Typography>
        <Box sx={{ marginBottom: 4 }}>
          <Button
            variant="contained"
            color="primary"
            href="https://management.reduce.isis.cclrc.ac.uk/argocd"
            sx={{ marginRight: 2 }}
          >
            ArgoCD
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href="https://management.reduce.isis.cclrc.ac.uk/grafana"
          >
            Grafana
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid grey", borderRadius: 2, padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Staging
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href="https://dev.reduce.isis.cclrc.ac.uk"
                sx={{ marginRight: 2 }}
              >
                Frontend
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://dev.reduce.isis.cclrc.ac.uk/admin-portal"
              >
                Admin-Portal
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid grey", borderRadius: 2, padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                Production
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href="https://reduce.isis.cclrc.ac.uk/"
                sx={{ marginRight: 2 }}
              >
                Frontend
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="https://reduce.isis.cclrc.ac.uk/admin-portal"
              >
                Admin-Portal
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
