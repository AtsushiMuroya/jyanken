import { AppBar, Button, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

export default function ApplicationBar() {
  const router = useRouter();

  return (
    <AppBar position="static" color="info">
      <Toolbar>
        <h2>じゃんけん ポン！</h2>
        <Button color="inherit" onClick={() => router.push("/scores")} >対戦結果</Button>
        <Button color="inherit" onClick={() => router.push("/status")} >対戦成績</Button>
      </Toolbar>
    </AppBar>
  );
}