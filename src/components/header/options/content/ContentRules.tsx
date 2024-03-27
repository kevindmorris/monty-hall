import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function ContentRules() {
  return (
    <React.Fragment>
      <Typography gutterBottom>
        These steps illustrate the key elements of the Monty Hall problem, a
        classic puzzle that challenges our intuition about probability:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Initial Setup:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="You're a contestant on a game show, and there are three closed doors in front of you, labeled A, B, and C. Behind one of these doors is a fantastic prize, like a car, and behind the other two are less desirable prizes, such as goats."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Your Choice:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="Your task is to choose one of the three doors, hoping to find the prize behind it. Let's say you choose Door A."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Host's Revelation:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="Now, the host of the show, Monty Hall, who knows where the prize is located, opens one of the other two doors that you did not choose. Monty will always reveal a goat behind one of these doors. For instance, if the prize is behind Door B, Monty will open Door C to show a goat."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Decision Point:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="With one door open showing a goat and two doors remaining closed, Monty presents you with a choice: you can stick with your original selection (Door A), or you can switch to the other unopened door (either Door B or Door C)."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Probability Analysis:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="Here's where it gets interesting. You might think it doesn't matter whether you switch or stay, as there are only two doors left. However, probability theory tells a different story. When you initially chose your door, you had a 1/3 chance of being correct. But when Monty reveals a goat behind one of the other doors, the probability doesn't change for your chosen door, but it effectively transfers to the remaining unopened door. Therefore, by switching, you increase your chances of winning to 2/3."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Final Decision:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="You make your final decision based on your strategy: sticking with your original choice or switching to the other unopened door."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Outcome:"
            primaryTypographyProps={{ fontWeight: 700 }}
            secondary="Regardless of your decision, the host opens the door you chose (if you didn't switch) or the other unopened door (if you switched), revealing whether you won the prize or not."
          />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
