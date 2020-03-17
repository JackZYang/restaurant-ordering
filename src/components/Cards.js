import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./Cards.css";

const MemberCards = ({ formData }) => {
  return (
    <Grid>
      {formData.map((tableData, index) => (
        <Grid.Column width={3} key={index}>
          <Card>
            <Card.Content>
              <Card.Header>{"Table " + tableData.table}</Card.Header>
              <Card.Description>
                {tableData.dishes.map(dish => (
                  <li>{dish}</li>
                ))}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default MemberCards;
