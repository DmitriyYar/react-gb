import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

type Chats = arrChats[];

interface arrChats {
  id: number;
  name: string;
}

const text = {
  color: "#2f7e92",
  fontSize: "16px",
  lineHeight: "16px",
};

const userChat: Chats = [
  {
    id: 10,
    name: "First Chat",
  },
  {
    id: 11,
    name: "Second Chat",
  },
  {
    id: 12,
    name: "Third Chat",
  },
];

export const Chats: FC = () => { 
  return (
    <List
      sx={{ width: "150px", height: "100%", maxWidth: 360, bgcolor: "#f3f3f3" }}
      aria-label="contacts"
      subheader={
        <ListSubheader
          sx={{
            bgcolor: "#f3f3f3",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "16px",
            fontWeight: "600",
            color: "darkgreen",
            lineHeight: "35px",
          }}
        > Чаты
        </ListSubheader>
      }
    >
      {userChat.map((item) => (
        <ListItemButton key={item.id}  sx={{ padding: 0 }}>
          <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText
              primary={`${item.name}`}
              primaryTypographyProps={{ style: text }}
            />
          </ListItem>
        </ListItemButton>
      ))}
    </List>
  );
};
